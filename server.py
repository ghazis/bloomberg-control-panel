# System imports
import subprocess
from flask import *
from os import path
from cmd_sender import bb_start_stop
from state import get_bb_state
# Local predicition modules
# find modules in parent_folder/predictions
# sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'prediction')) 

static_assets_path = path.join(path.dirname(__file__), "dist")
app = Flask(__name__, static_folder=static_assets_path)

def _get_state(server):
    return get_bb_state(server)

def _send_bb_cmd(server, username, pwd, cmd):
	return bb_start_stop(server, username, pwd, cmd)

# ----- Routes ----------

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")

@app.route('/get_state')
def get_state():
    server = request.args.get('server')
    return _get_state(server)

@app.route('/send_bb_cmd')
def send_bb_cmd():
	server = request.args.get('server')
	username = request.args.get('username')
	pwd = request.args.get('pwd')
	cmd = request.args.get('cmd')
   	return _send_bb_cmd(server, username, pwd, cmd)

if __name__ == "__main__":
    # Make sure all frontend assets are compiled
    #subprocess.Popen("webpack")

    # Start the Flask app
    app.run(host='0.0.0.0', port=7000, threaded=True)

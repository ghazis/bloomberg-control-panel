import subprocess, time, json

def get_bb_state(server=r'\\chivprod007'):
    proc = subprocess.call([r'\\chivprod032\Production\PSExec.exe', server, 'C:\\Program Files\Spot Trading LLC\GetBBState\get_bb_state.bat'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    with open(server + r'\c$\Program Files\Spot Trading LLC\GetBBState\bb_state.txt', 'r') as f:
        state = int(f.read())
        return json.dumps([{'results': state}]), 200, {'ContentType':'application/json'}
    return json.dumps([{'results': 'ERROR'}]), 200, {'ContentType':'application/json'}

print get_bb_state()
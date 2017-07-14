import subprocess, json, time

def bb_start_stop(server, username, pwd, cmd):
	try:
		if cmd == 'start':
			if 'chivprod034' in server:
				proc = subprocess.Popen([r'\\chivprod032\Production\PSExec.exe', '-s', '-i', '1', server, r'\\chivprod032\Production\Support\BloombergLogin\BloombergLogin034.exe', username, pwd], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
			else:
				proc = subprocess.Popen([r'\\chivprod032\Production\PSExec.exe', '-s', '-i', '1', server, r'\\chivprod032\Production\Support\BloombergLogin\BloombergLogin.exe', username, pwd], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
			out = proc.stdout.read()
			err = proc.stderr.read()
			return json.dumps([{'results': out}]), 200, {'ContentType':'application/json'}
		elif cmd == 'stop':
			proc = subprocess.Popen([r'\\chivprod032\Production\PSExec.exe', '-s', server, 'taskkill', '/im', 'wintrv.exe', '/f'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
			out = proc.stdout.read()
			err = proc.stderr.read()
			return json.dumps([{'results': out}]), 200, {'ContentType':'application/json'}
		return json.dumps([{'results': 'ERROR'}]), 200, {'ContentType':'application/json'}

	except Exception as e:
		print e
		return json.dumps([{'results':e}]), 400, {'ContentType':'application/json'}
export function checkingBloomberg() {
    return {
        type: 'CHECKING_BLOOMBERG'
    };
}

export function startBloomberg() {
    return {
        type: 'START_BLOOMBERG'
    };
}

export function startedBloomberg() {
    return {
        type: 'STARTED_BLOOMBERG'
    };
}

export function stopBloomberg() {
    return {
        type: 'STOP_BLOOMBERG'
    };
}

export function stoppedBloomberg() {
    return {
        type: 'STOPPED_BLOOMBERG'
    };
}

export function setBBStatusImg(server, status) {
    return {
        type: 'SET_BB_STATUS_IMG',
        server: server,
        status: status
    }
}

export function setStatusStyle(style) {
    return {
        type: 'SET_STATUS_STYLE',
        style: style
    }
}

function setInitialState(dispatch, status) {
    if (status == 1) {
        dispatch(startedBloomberg());
    } else {
        dispatch(stoppedBloomberg());
    }
}

export function get_state(server) {
    return (dispatch, getState) => {
        dispatch(checkingBloomberg())
        fetch('http://chivprod031:9999/get_state?server=\\\\' + server)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

            return response;
        })
        .then((response) => response.json())
        .then((res) => setInitialState(dispatch, res[0].results))
    };
}

export function get_all_states(servers) {
    return (dispatch, getState) => {
        for (let server of servers) {
            fetch('http://chivprod031:9999/get_state?server=\\\\' + server)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }

                return response;
            })
            .then((response) => response.json())
            .then((res) => dispatch(setBBStatusImg(server, res[0].results)))
        }
    };
}

export function set_status_style() {
    var status_list = [];
    return (dispatch, getState) => {
        var state = getState();
        var vals = Object.keys(state.bbSetStates.bbStates).map(function(key) {
            return state.bbSetStates.bbStates[key];
        });
        for (let server of vals) {
            if (server.status != undefined) {
                status_list.push(server.status);
            }
        }
        if (status_list.includes(0)) {
            dispatch(setStatusStyle("danger"));
        } else {
            dispatch(setStatusStyle("success"));
        }
    };
}

export function runScript(url, name) {
    return (dispatch, getState) => {
    	if (name == 'Start Bloomberg') {
    		dispatch(startBloomberg());
    		fetch(url)
    			.then((response) => {
	                if (!response.ok) {
	                    throw Error(response.statusText);
	                }

                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(startedBloomberg()))
    	} else if (name == 'Stop Bloomberg') {
    		dispatch(stopBloomberg());
    		fetch(url)
    			.then((response) => {
	                if (!response.ok) {
	                    throw Error(response.statusText);
	                }
                return response;
            })
            .then((response) => response.json())
            .then(() => dispatch(stoppedBloomberg()))
    	}
    };
}
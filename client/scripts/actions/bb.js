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
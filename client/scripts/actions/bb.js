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

export function setBBState(state) {
    return {
        type: 'SET_BB_STATE',
        state: state
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
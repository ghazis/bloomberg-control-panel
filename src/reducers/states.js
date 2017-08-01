import { not_running, running } from '../components/images';

export const StoppedBBState = {
                    state: 'Not Running',
                    img: not_running,
                    style: { width: 150 }
                }

export const startedBBState = {
                    state: 'Running',
                    img: running,
                    style: { width: 150 }
                }

export const stopButtonState = {
                    name: 'Stop Bloomberg',
                    cmd: '_on',
                    classname: 'btn-success'
                }

export const startButtonState = {
                    name: 'Start Bloomberg',
                    cmd: '_off',
                    classname: 'btn-danger'
                }

export const bbStates = {
    chivprod042: {
        status: 0,
        img: not_running
    },
    chivprod026: {
        status: 0,
        img: not_running
    },
    chivprod044: {
        status: 0,
        img: not_running
    },
    chivprod034: {
        status: 0,
        img: not_running
    },
    chivprod046: {
        status: 0,
        img: not_running
    },
    chivprod049: {
        status: 0,
        img: not_running
    },
    chivprod007: {
        status: 0,
        img: not_running
    },
    style: "danger"
}

export const InitialState = {
    progress: 0,
	bbState: StoppedBBState,
    startedBBState: startedBBState,
    stopButtonState: stopButtonState,
    startButtonState: startButtonState,
    bbStates: bbStates
}
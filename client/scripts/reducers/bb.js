import { InitialButtonsState, bbState, startButtonState, stopButtonState } from './states';
import { not_running, running, is_loading } from '../components/images';

export function bbSetStates(state = InitialButtonsState, action) {
    switch (action.type) {
        case 'START_BLOOMBERG':
            return {
                ...state,
                    startButtonState:{
                        ...startButtonState,
                            name: 'Starting...'
                    },
                    bbState:{
                        ...bbState,
                            img: is_loading,
                            style: { width: 90 }
                    },
                    stopButtonState: stopButtonState
            }
        case 'STARTED_BLOOMBERG':
            return {
                ...state,
                    startButtonState:{
                        ...startButtonState,
                            name: 'Started!'
                    },
                    bbState:{
                        ...bbState,
                            img: running
                    }
            }
        case 'STOP_BLOOMBERG':
            return {
                ...state,
                    stopButtonState:{
                        ...stopButtonState,
                            name: 'Stopping...'
                    },
                    bbState:{
                        ...bbState,
                            img: is_loading,
                            style: { width: 90 }
                    },
                    startButtonState: startButtonState
            }
        case 'STOPPED_BLOOMBERG':
            return {
                ...state,
                    stopButtonState:{
                        ...stopButtonState,
                            name: 'Stopped!'
                    },
                    bbState:{
                        ...bbState,
                            img: not_running
                    }
            }
        case 'SET_BB_STATE':
            return {
                ...state,
                    bbState:{
                        ...bbState,
                            state: action.state
                    }
            }

        default:
            return state;

    }        
}
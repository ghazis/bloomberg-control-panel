import { InitialState, bbState, startedBBState, stopButtonState, startButtonState } from './states';
import { not_running, running, is_loading } from '../components/images';

export function bbSetStates(state = InitialState, action) {
    switch (action.type) {
        case 'SET_PROGRESS':
            return {
                ...state,
                    progress: action.progress
            }
        case 'CHECKING_BLOOMBERG':
            return {
                ...state,
                    startButtonState:{
                        ...startButtonState,
                            name: 'Checking Status...'
                    },
                    bbState:{
                        ...bbState,
                        state: 'Checking Status...',
                            img: is_loading,
                            style: { width: 90 }
                    },
                    stopButtonState: {
                        ...stopButtonState,
                            name: 'Checking Status...'
                    }
            }
        case 'START_BLOOMBERG':
            return {
                ...state,
                    startButtonState:{
                        ...startButtonState,
                            name: 'Starting...'
                    },
                    bbState:{
                        ...bbState,
                        state: 'Starting',
                            img: is_loading,
                            style: { width: 90 }
                    },
                    stopButtonState: stopButtonState
            }
        case 'STARTED_BLOOMBERG':
            return {
                ...state,
                    stopButtonState:{
                        ...stopButtonState,
                            name: 'Stop Bloomberg'
                    },
                    startButtonState:{
                        ...startButtonState,
                            name: 'Start Bloomberg'
                    },
                    bbState: startedBBState
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
                            state: 'Stopping',
                            img: is_loading,
                            style: { width: 90 }
                    },
                    startButtonState: startButtonState
            }
        case 'STOPPED_BLOOMBERG':
            return {
                ...state,
                    bbState: {
                        ...bbState,
                            state: 'Not Running',
                            img: not_running,
                            style: { width: 150 }
                    },
                    startButtonState:{
                        ...startButtonState,
                            name: 'Start Bloomberg'
                    },
                    stopButtonState:{
                        ...stopButtonState,
                            name: 'Stop Bloomberg'
                    }
            }
        case 'SET_BB_STATUS_IMG':
            if (action.status == 1){
                return {
                    ...state,
                        bbStates: {
                            ...state.bbStates,
                            [action.server]: {
                                ...[action.server],
                                img: running,
                                status: 1
                            }
                        }
                }             
            } else {
                return {
                    ...state,
                        bbStates: {
                            ...state.bbStates,
                            [action.server]: {
                                ...[action.server],
                                img: not_running,
                                status: 0
                            }
                        }
                }      
            }
        case 'SET_STATUS_STYLE':
            return {
                ...state,
                bbStates: {
                    ...state.bbStates,
                    style: action.style
                }
            }

        default:
            return state;

    }        
}
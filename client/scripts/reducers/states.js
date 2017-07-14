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

export const InitialState = {
	bbState: StoppedBBState,
    startedBBState: startedBBState,
    stopButtonState: stopButtonState,
    startButtonState: startButtonState
}
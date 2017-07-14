import { not_running, running } from '../components/images';

export const bbState = {
                    state: 'Not Running',
                    img: not_running,
                    style: { width: 150 }
                }


export const startButtonState = {
                    name: 'Start Bloomberg',
                    cmd: '_off',
                    classname: 'btn-danger'
                }

export const stopButtonState = {
                    name: 'Stop Bloomberg',
                    cmd: '_on',
                    classname: 'btn-success'
                }


export const InitialButtonsState = {
	bbState: bbState,
    startButtonState: startButtonState,
    stopButtonState: stopButtonState
}
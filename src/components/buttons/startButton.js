import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import {  runScript } from '../../actions/bb';

class StartButton extends Component {



	render() {

		const wellStyles = {maxWidth: 300};

		return (
	        <Button onClick={() => {this.props.runScript('http://chivprod031:9999/send_bb_cmd?server=\\\\'+this.props.server+'&username='+this.props.username+'&pwd='+this.props.pwd+'&cmd=start', this.props.buttonData.name)}} bsStyle="primary" bsSize="large" block>{this.props.buttonData.name}</Button>
		)
}
}

const mapStateToProps = (state) => {
    return {
    	buttonData: state.bbSetStates.startButtonState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, name) => dispatch(runScript(url, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(StartButton);
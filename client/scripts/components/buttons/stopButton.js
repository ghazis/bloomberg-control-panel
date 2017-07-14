import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { runScript } from '../../actions/bb';

class StopButton extends Component {

    render() {

        const wellStyles = {maxWidth: 300};

        return (
            <Button onClick={() => {this.props.runScript('http://localhost:7000/send_bb_cmd?server=\\\\'+this.props.server+'&username='+this.props.username+'&pwd='+this.props.pwd+'&cmd=stop', this.props.buttonData.name)}} bsStyle="primary" bsSize="large" block>{this.props.buttonData.name}</Button>
        )
}
}

const mapStateToProps = (state) => {

    return {
        buttonData: state.bbSetStates.stopButtonState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runScript: (url, name) => dispatch(runScript(url, name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(StopButton);
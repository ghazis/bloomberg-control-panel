import React, { Component } from 'react';
import { StartButton, StopButton } from '../buttons';
import { Table, ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { get_state } from '../../actions/bb';

class BB7 extends Component {

  componentDidMount() {
    return(this.props.get_state("chivprod007"));
  }

  render () {

    return (
      <div>

          <h1 className="text-center">CHIVPROD007</h1>
          <div className="col-xs-6">
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-center">Controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="well">
                        <StartButton 
                            server="chivprod007" 
                            username="mhoban5"
                            pwd="spot1234"/>
                        <StopButton 
                            server="chivprod007" 
                            username="mhoban5"
                            pwd="spot1234"/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </div>


          <div className="col-xs-6">
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><img src={this.props.img} style={this.props.style}></img></td>
                  </tr>
                  <h1 className="text-center">{this.props.status}</h1>
                  <ProgressBar active now={this.props.progress} max={10}/>
                </tbody>
              </Table>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      progress: state.bbSetStates.progress,
      status: state.bbSetStates.bbState.state,
      img: state.bbSetStates.bbState.img,
      style: state.bbSetStates.bbState.style
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_state: (server) => dispatch(get_state(server))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(BB7);
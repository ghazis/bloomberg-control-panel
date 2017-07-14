import React, { Component } from 'react';
import { StartButton, StopButton } from '../buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { get_state } from '../../actions/bb';

class BB5 extends Component {

  componentDidMount() {
    return(this.props.get_state("chivprod046"));
  }

  render () {

    return (
      <div>

          <h1 className="text-center">CHIVPROD046</h1>
          <div className="col-xs-6">
              <Table responsive>
                <thead>
                  <tr>
                    <th>Controls</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="well">
                        <StartButton 
                            server="chivprod046" 
                            username="msiwicki"
                            pwd="spot123"/>
                        <StopButton 
                            server="chivprod046" 
                            username="msiwicki"
                            pwd="spot123"/>
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
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><img src={this.props.img} style={this.props.style}></img></td>
                  </tr>
                </tbody>
              </Table>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
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
(BB5);
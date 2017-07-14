import React, { Component } from 'react';
import { StartButton, StopButton } from '../buttons';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class BB1 extends Component {

  render () {

    return (
      <div>

          <h1 className="text-center">CHIVPROD044</h1>
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
                            server="chivprod044" 
                            username="spottrd2"
                            pwd="riley"/>
                        <StopButton 
                            server="chivprod044" 
                            username="spottrd2"
                            pwd="riley"/>
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

export default connect(mapStateToProps)
(BB1);
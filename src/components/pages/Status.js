import React, { Component } from 'react';
import { StartButton, StopButton } from '../buttons';
import { Table, Panel, ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { get_all_states, set_status_style } from '../../actions/bb';

class Status extends Component {

  componentWillMount() {
    this.props.get_all_states([
      'chivprod042',
      'chivprod026',
      'chivprod044',
      'chivprod034',
      'chivprod046',
      'chivprod049',
      'chivprod007'
    ], 1);
  }

    componentDidMount() {
    const intervalID = setInterval(() => {
      this.props.set_status_style();
      this.props.get_all_states([
      'chivprod042',
      'chivprod026',
      'chivprod044',
      'chivprod034',
      'chivprod046',
      'chivprod049',
      'chivprod007'
    ], 0);} , 6000);

    this.setState({intervalID: intervalID});
  }

    componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render () {

    return (
      <div>

          <h1 className="text-center">Current Status</h1>
          <div className="col-xs-12 text-center" ><ProgressBar active now={this.props.progress} max={10} bsStyle="success"/></div>
          <div className="col-xs-6">
              <Table responsive>
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Panel className='text-center' header='Bloomberg Servers' bsStyle={this.props.bbState.style}>
                        <Table responsive>
                          <thead>
                            <tr>
                              <td className='text-center'><h3>1 - CHIVPROD042</h3></td>
                            </tr>
                            <tr>
                              <td className='text-center'><h3>2 - CHIVPROD026</h3></td>
                            </tr>
                            <tr>
                              <td className='text-center'><h3>3 - CHIVPROD044</h3></td>
                            </tr>
                            <tr>
                              <td className='text-center'><h3>4 - CHIVPROD034</h3></td>
                            </tr>
                            <tr>
                              <td className='text-center'><h3>5 - CHIVPROD046</h3></td>
                            </tr>
                            <tr>
                              <td className='text-center'><h3>6 - CHIVPROD049</h3></td>
                            </tr>
                            <tr>
                              <td className='text-center'><h3>7 - CHIVPROD007</h3></td>
                            </tr>
                          </thead>
                        </Table>
                      </Panel>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </div>


          <div className="col-xs-6">
              <Table responsive>
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Panel className='text-center' header='Status' bsStyle={this.props.bbState.style}>
                        <Table responsive>
                          <thead>
                            <tr>
                              <td className='text-center'><img src={this.props.bbState.chivprod042.img} style={{ width: 77 }}></img></td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src={this.props.bbState.chivprod026.img} style={{ width: 77 }}></img></td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src={this.props.bbState.chivprod044.img} style={{ width: 77 }}></img></td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src={this.props.bbState.chivprod034.img} style={{ width: 77 }}></img></td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src={this.props.bbState.chivprod046.img} style={{ width: 77 }}></img></td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src={this.props.bbState.chivprod049.img} style={{ width: 77 }}></img></td>
                            </tr>
                            <tr>
                              <td className='text-center'><img src={this.props.bbState.chivprod007.img} style={{ width: 77 }}></img></td>
                            </tr>
                          </thead>
                        </Table>
                      </Panel>
                    </td>
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
      progress: state.bbSetStates.progress,
      bbState: state.bbSetStates.bbStates
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_all_states: (servers, initialFlag) => dispatch(get_all_states(servers, initialFlag)),
        set_status_style: () => dispatch(set_status_style())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)
(Status);
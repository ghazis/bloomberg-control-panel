import React, { Component } from 'react';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { get_state } from './actions/bb'


class App extends Component {

  render() {
    return (
    	<div>
			<Nav bsStyle="tabs" activeKey="1">
				<LinkContainer to="/chivprod042"><NavItem eventKey="1">CHIVPROD042</NavItem></LinkContainer>
				<LinkContainer to="/chivprod026"><NavItem eventKey="2">CHIVPROD026</NavItem></LinkContainer>
				<LinkContainer to="/chivprod044"><NavItem eventKey="3">CHIVPROD044</NavItem></LinkContainer>
        <LinkContainer to="/chivprod034"><NavItem eventKey="3">CHIVPROD034</NavItem></LinkContainer>
        <LinkContainer to="/chivprod046"><NavItem eventKey="3">CHIVPROD046</NavItem></LinkContainer>
        <LinkContainer to="/chivprod049"><NavItem eventKey="3">CHIVPROD049</NavItem></LinkContainer>
        <LinkContainer to="/chivprod007"><NavItem eventKey="3">CHIVPROD007</NavItem></LinkContainer>
      
			</Nav>
      		{Routes}
       	</div>
    );
  }
}

export default App;

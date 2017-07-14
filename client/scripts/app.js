import React, { Component } from 'react';
import Routes from './components/routes';
import { Link } from 'react-router-dom';
import { Nav , NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class App extends Component {


  render() {
    return (
    	<div>
			<Nav bsStyle="tabs" activeKey="1">
				<LinkContainer to="/BB1"><NavItem eventKey="1">Bloomberg 1</NavItem></LinkContainer>
				<LinkContainer to="/BB2"><NavItem eventKey="2">Bloomberg 2</NavItem></LinkContainer>
				<LinkContainer to="/BB3"><NavItem eventKey="3">Bloomberg 3</NavItem></LinkContainer>
        <LinkContainer to="/BB4"><NavItem eventKey="3">Bloomberg 4</NavItem></LinkContainer>
        <LinkContainer to="/BB5"><NavItem eventKey="3">Bloomberg 5</NavItem></LinkContainer>
        <LinkContainer to="/BB6"><NavItem eventKey="3">Bloomberg 6</NavItem></LinkContainer>
        <LinkContainer to="/BB7"><NavItem eventKey="3">Bloomberg 7</NavItem></LinkContainer>
      
			</Nav>
      		{Routes}
       	</div>
    );
  }
}

export default App;

import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import constants from '../constants';

class Header extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        {constants.appName}
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className="navbar-right">
                    <NavItem onClick={() => this.props.history.push('/')} eventKey={1}>All Tasks</NavItem>
                    <NavItem onClick={() => this.props.history.push('/new-task')} eventKey={2}>Create New Task</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default withRouter(Header);
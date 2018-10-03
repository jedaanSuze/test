"use strict";
import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import * as routes from '../constants/RoutesConstant';

const Navigation = () => {
    return (
        <div>
            <Nav bsStyle="pills" activeKey={2}>
                <NavItem eventKey="1" href={routes.SIGN_IN}>
                    Sign In
                </NavItem>
                <NavItem eventKey="2" href={routes.LANDING}>
                    Landing
                </NavItem>
                <NavItem eventKey="3" href={routes.HOME}>
                    Home
                </NavItem>
                <NavItem eventKey="3" href={routes.ACCOUNT}>
                    Account
                </NavItem>
            </Nav>
        </div>);

}

export default Navigation;

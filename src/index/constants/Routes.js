"use strict";
import React from 'react';
import App from '../App';
import LandingPage from "../components/Landing";
import SignUpPage from "../components/SignUp";
import SignInPage from "../components/SignIn";
import PasswordForgetPage from "../components/PasswordForget";
import AccountPage from "../components/Account";

/*import {HomePage} from "../components/HomePage";*/

import * as routes from '../constants/RoutesConstant';

export default [
    {
        ...App,
        routes: [
            {
                ...LandingPage,
                path: routes.LANDING,
                exact: true
            },
            {
                ...SignUpPage,
                path: routes.SIGN_UP,
                exact: true
            },
            {
                ...SignInPage,
                path: routes.SIGN_IN,
                exact: true
            },
            {
                ...PasswordForgetPage,
                path: routes.PASSWORD_FORGET,
                exact: true
            },
            /*{
                ...HomePage,
                path: routes.HOME,
                exact: true
            },*/
            {
                ...AccountPage,
                path: routes.ACCOUNT,
                exact: true
            }
        ]
    }
];




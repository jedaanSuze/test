"use strict";
import React from 'react';
import App from '../App';
import LandingPage from "../components/LandingPage";
import SignUpPage from "../components/SignUpPage";
import SignInPage from "../components/SignInPage";
import PasswordForgetPage from "../components/PasswordForgetPage";
import HomePage from "../components/HomePage";
import AccountPage from "../components/AccountPage";

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
            {
                ...HomePage,
                path: routes.HOME,
                exact: true
            },
            {
                ...AccountPage,
                path: routes.ACCOUNT,
                exact: true
            }
        ]
    }
];




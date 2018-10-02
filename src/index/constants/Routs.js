"use strict";
import React from 'react';
import App from '../App';
import LandingPage from "../components/LandingPage";
import SignUpPage from "../components/SignUpPage";
import SignInPage from "../components/SignInPage";
import PasswordForgetPage from "../components/PasswordForgetPage";
import HomePage from "../components/HomePage";
import AccountPage from "../components/AccountPage";

export default [
    {
        ...App,
        routes: [
            {
                ...LandingPage,
                path: '/',
                exact: true
            },
            {
                ...SignUpPage,
                path: '/signup',
                exact: true
            },
            {
                ...SignInPage,
                path: '/signin',
                exact: true
            },
            {
                ...PasswordForgetPage,
                path: '/pw-forget',
                exact: true
            },
            {
                ...HomePage,
                path: '/home',
                exact: true
            },
            {
                ...AccountPage,
                path: '/account',
                exact: true
            }
        ]
    }
];




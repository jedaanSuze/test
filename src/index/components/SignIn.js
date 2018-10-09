"use strict";
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SignUpLink from './SignUpLink';
import SignInForm from './SignInForm';
import { PasswordForgetLink } from './PasswordForget';
import {auth} from '../../firebase/index';
import * as routes from '../constants/routes';

const SignInPage = ({history}) => {

    return (
        <div>
            <h1>SignIn</h1>
            <SignInForm history={history}/>
            <PasswordForgetLink />
            <SignUpLink/>
        </div>
    );
};

export default {
    component:  withRouter(SignInPage)
};


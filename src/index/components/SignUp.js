"use strict";
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as routes from '../constants/routes';
import SignUpForm from "./SignUpForm";

const SignUpPage = ({history}) => {

    return (
        <div>
            <h1>SignUp</h1>
            <SignUpForm history={history}/>
        </div>

    );
};

export default {
    component: withRouter(SignUpPage)
};




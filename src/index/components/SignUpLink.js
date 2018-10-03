"use strict";
import React, {Component} from 'react';
import * as routes from "../constants/RoutesConstant";

const SignUpLink = () => {
    return (
        <div>
            <p>
                Don't have an account?
                {' '}
                <Link to={routes.SIGN_UP}>Sign Up</Link>
            </p>
        </div>
    );

};

export default SignUpLink;

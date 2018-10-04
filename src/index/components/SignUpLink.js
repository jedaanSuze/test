"use strict";
import React from 'react';
import * as routes from "../constants/RoutesConstant";
import { Link } from 'react-router-dom';

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

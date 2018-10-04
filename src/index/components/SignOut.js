"use strict";
import React from 'react';
import {auth} from ' ../../firebase';

const SignOutButton = () => {

    return (
        <div>
            <button
                type="button"
                onClick={auth.doSignOut}
            >
                Sign Out
            </button>
        </div>
    );

};

export default SignOutButton;

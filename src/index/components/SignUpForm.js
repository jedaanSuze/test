"use strict";
import {Component} from "react";
import React from "react";
import {auth} from '../../firebase/index';
import * as routes from "../constants/RoutesConstant";

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                debugger;
                this.setState({...INITIAL_STATE});
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        history.push(routes.HOME);
        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            username === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default SignUpForm;

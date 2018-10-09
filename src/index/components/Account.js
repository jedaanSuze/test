import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import AuthUserContext from '../session/AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from '../session/withAuthorization';

const AccountPage = ({ authUser }) =>
    <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps)
)(AccountPage);

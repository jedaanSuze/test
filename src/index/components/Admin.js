/*
import React from 'react';

import AuthUserContext from '../session/AuthUserContext'
import withAuthorization from '../session/withAuthorization';


const AdminPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <h1>Admin</h1>
                <p>Restricted area! Only users with the admin rule are authorized.</p>
            </div>
        }
    </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser && authUser.role === 'ADMIN';

export default {
    component:  withAuthorization(authCondition)(AdminPage),
};
*/

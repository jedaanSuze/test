import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './home';
import LogIn from './login';
import NotFound from './notfound';

const App = ({route}) => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">login</NavLink>
                </li>
            </ul>

            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => <Home name="Alligator.io" {...props} />}
                />
                <Route path="/login" component={LogIn}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
};

export default App;

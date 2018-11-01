import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import NotFound from './NotFound';

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

import React from 'react';
import {renderRoutes} from 'react-router-config';
import Navigation from "./components/Navigation";
import withAuthentication from './session/withAuthentication';
const App = ({route}) => {
    return (
        <div>
            <Navigation/>
            <hr/>
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component:withAuthentication(App),
};

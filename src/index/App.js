import React from 'react';
import {renderRoutes} from 'react-router-config';
import Navigation from "./components/Navigation";

const App = ({route}) => {
    return (
        <div>
            <Navigation/>
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: App,
};

// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'

import {Provider} from 'react-redux';
import createStore from '../common/createstore';
import Routes from './constants/Routes';

const store = createStore(window.INITIAL_STATE);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));

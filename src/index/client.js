// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import MainPage from './components/MainPage';
import createStore from '../common/createstore';

const store = createStore(window.INITIAL_STATE);

ReactDOM.hydrate(
    <Provider store={store}>
        <MainPage/>
    </Provider>
    , document.querySelector('#root'));

// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import TextEditor from './components/texteditor';


ReactDOM.hydrate(
    <TextEditor/>
    , document.querySelector('#root'));

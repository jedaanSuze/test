import {createStore, applyMiddleware} from 'redux';
// createStore to make redux store ,
// applyMiddleware
import thunk from 'redux-thunk';// to handle async actions creators .
import reducers from '../index/reducers/index';

const middleware = [thunk];
/*startDeleteForDeployment*/
middleware.push(require('redux-immutable-state-invariant')());
/*endDeleteForDeployment*/


export default (appData) => {
    let data = appData;
    const store = createStore(reducers, {data}, applyMiddleware(...middleware));
    return store;
};

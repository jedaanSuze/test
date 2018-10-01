import React from 'react';
import {renderToString} from 'react-dom/server';
import {Helmet} from 'react-helmet';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';
import createStore from '../../src/common/createstore';
import MainPage from '../../src/index/components/MainPage';

async function indexRenderer(appData) {

    const store = createStore(appData || {});
    let content;
    content = renderToString(
        <Provider store={store}>
            <MainPage/>
        </Provider>
    );
    //Helmet renderStatic stores all the meta tags that were defined in the components
    const helmet = Helmet.renderStatic();
    return {
        helmet,
        content,
        INITIAL_STATE: serialize(store.getState())
    };

}

module.exports = indexRenderer;

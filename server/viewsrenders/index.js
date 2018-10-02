import React from 'react';
import {renderToString} from 'react-dom/server';
import {Helmet} from 'react-helmet';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {matchRoutes} from 'react-router-config';
import {matchPath} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript';
import createStore from '../../src/common/createstore';
import Routes  from '../../src/index/constants/Routs';

async function indexRenderer(appData,req,res) {

    const store = createStore(appData || {});

    let matchedRoute;
    // call loadData methods .
    const promises = matchRoutes(Routes, req.path).map(({route}) => {
            matchedRoute = matchPath(req.path, route);
            /* console.log('jed route ',route);*/
            return route.loadData ? route.loadData(store) : null;
        }
    );

    // once all the promises from the routes have been resolved, continue with rendering
    return Promise.all(promises).then(() => {
        let content;

        // here is where we actually render the html, once we have the required asnyc data
         content = renderToString( // eslint-disable-line
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    {renderRoutes(Routes)}
                </StaticRouter>
            </Provider>);

        //Helmet renderStatic stores all the meta tags that were defined in the components
        const helmet = Helmet.renderStatic();

        return {
            helmet,
            content,
            INITIAL_STATE: serialize(store.getState())
        };
    });
}

module.exports = indexRenderer;

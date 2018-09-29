import React from 'react';
import {renderToString} from 'react-dom/server';
import TextEditor from '../../src/index/components/texteditor';
import {Helmet} from 'react-helmet';


async function indexRenderer(appData) {

    let content;
    content = renderToString(
        <TextEditor/>
        //<TextEditor />
    );
    //Helmet renderStatic stores all the meta tags that were defined in the components
    const helmet = Helmet.renderStatic();
    return {
        helmet,
        content,

    };

}

module.exports = indexRenderer;

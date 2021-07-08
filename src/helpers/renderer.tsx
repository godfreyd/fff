import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import UAParser from "ua-parser-js"
import RoutesDesktop from '../client/Routes@desktop';
import RoutesMobile from '../client/Routes@mobile';
import { Helmet } from 'react-helmet';

export default (req: any, store: any, context: any) => {

    const parser = new UAParser(req.headers['user-agent']);
    const device = parser.getDevice().type;
    const platform = (device === "tablet" || device === "mobile") ? "mobile" : "desktop";

    // Server-side rendering
    const appHtml = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{(platform === "mobile") ? renderRoutes(RoutesMobile) : renderRoutes(RoutesDesktop)}</div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();
    
    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
            <link rel="stylesheet" href="http://localhost:8080/${platform}.css">
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root">${appHtml}</div>
                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="http://localhost:8080/${platform}.js" ></script>
            </body>
        </html>
    `;
};

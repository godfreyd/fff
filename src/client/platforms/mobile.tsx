//  Starting point
import '@babel/polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import RoutesMobile from '../Routes@mobile';
import store from "../redux/store"

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(RoutesMobile)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
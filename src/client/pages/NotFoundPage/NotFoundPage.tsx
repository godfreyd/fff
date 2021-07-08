import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import './NotFoundPage.scss';

const cnNotFoundPage = cn('NotFoundPage');

function head() {
    return (
        <Helmet>
            <title>{`Eapteka — 404`}</title>
            <meta charset="utf-8"></meta>
            <meta property="og:title" content="Users App"></meta>
            <meta name="description" content="Free Web tutorials"></meta>
            <meta name="keywords" content="Eapteka"></meta>
            <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport"></meta>
        </Helmet>
    );
}

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;

    return (
        <div className={cnNotFoundPage()}>
            {head()}
            <h1>404</h1>
            <p>Ooops, page not found</p>
            <div className={cnNotFoundPage('Link')}>
                <Link to="/">Вернуться на главную</Link>
            </div>
        </div>
    );
};

export default {
    component: NotFoundPage,
};

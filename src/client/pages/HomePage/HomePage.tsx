import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import { Helmet } from 'react-helmet';
import './HomePage.scss';

const cnHomePage = cn('HomePage');

class HomePage extends Component {

    head() {
        return (
            <Helmet>
                <title>{`Eapteka`}</title>
                <meta charset="utf-8"></meta>
                <meta property="og:title" content="Users App"></meta>
                <meta name="description" content="Free Web tutorials"></meta>
                <meta name="keywords" content="Eapteka"></meta>
                <meta
                    content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
                    name="viewport"
                ></meta>
            </Helmet>
        );
    }

    render() {
        return (
            <div className={cnHomePage()}>
                {this.head()}
                <section className={cnHomePage('Section')}>
                        <h1>Заголовок</h1>
                        <h2>Подзаголовок</h2>
                </section>
            </div>
        );
    }
}

export default {
    component: HomePage,
};

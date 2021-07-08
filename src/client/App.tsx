import React from 'react';
import { renderRoutes } from 'react-router-config';
import { useComponentRegistry } from './hooks';
import { hot } from 'react-hot-loader/root';

export interface IAppProps {
    route: any;
}

const App = ({ route }: IAppProps) => {
    const { Header, Footer, Page, Main } = useComponentRegistry();
    return (
        <Page>
            <Header/>
                <Main>
                {renderRoutes(route.routes)}
                </Main>
            <Footer/>
        </Page>
    );
};

export const AppCommon = hot(App);
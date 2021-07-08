import React, { Component, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './Main.scss';

const cnMain = cn('Main');

interface IMain {
    children?: ReactNode,
    className?: string
}
export class Main extends Component<IMain> {

    constructor(props) {
        super(props);
    }

    render(): ReactNode {
        const { children, className } = this.props;

        return (
            <main className={cnMain(null, [className])}>
                <div className={cnMain('Container')}>{children}</div>
            </main>
        );
    }
}
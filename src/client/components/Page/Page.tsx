import React, { PureComponent } from 'react';
import { cn } from '@bem-react/classname';

import './Page.scss';

const cnPage = cn('Page');

export class Page extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className } = this.props;

        return <div className={cnPage(null, [className])}>{children}</div>;
    }
}

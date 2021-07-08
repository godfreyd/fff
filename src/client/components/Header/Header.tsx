import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { Icon } from '../Icon/Icon.bundle';
import { Link } from 'react-router-dom';

import './Header.scss';

const cnHeader = cn('Header');

interface IHeaderDesktopProps {
    className?: string;
}

export const Header: FC<IHeaderDesktopProps> = (props) => {

 const {className} =  props;

    return (
        <header className={cnHeader(null, [className])}>
            <div className={cnHeader('Container')}>
                <div className={cnHeader('Logo')}>
                    <Link to="/" >
                        <div className="Logo" role="img" aria-label="LookingSchools"></div>
                    </Link>
                </div>
                <div className={cnHeader('Left')}></div>
                <div className={cnHeader('Right')}>
                    <Icon glyph="cart" size="m" className={className} />
                </div>
            </div>
        </header>
    );
};
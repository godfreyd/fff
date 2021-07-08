import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Icon } from '../Icon/Icon.bundle';
import { Link } from 'react-router-dom';

import './Footer.scss';

const cnFooter = cn('Footer');

const menu = [
    {
        nav: 'Left',
        icons: ['twitter', 'facebook', 'youtube', 'instagram'],
    },
    {
        nav: 'Right',
        links: [
            {
                label: 'Тел. +7 (495) 10-100-10',
                href: 'tel:+74951010010',
            }
        ],
    },
];

const FooterMenu = (props) => {
    const menu = props.menu;

    const nav = menu.map((nav, i) => (
        <div className={cnFooter(nav.nav)} key={i}>
            {nav.links
                ? nav.links.map((link) => {
                      if (link.label) {
                          return (
                              <a
                                  href={link.href}
                                  className={cnFooter('Link')}
                                  target="_blank"
                                  key={`footer-link-${link.href}-${link.label}`}
                              >
                                  <p>{link.label}</p>
                              </a>
                          );
                      }
                      return (
                          <span className={cnFooter(link.className)} key={`footer-link-${link.text}`}>
                              <p>{link.text}</p>
                          </span>
                      );
                  })
                : nav.icons.map((icon, key) => (
                      <Link to="#" className={cnFooter('Link')} key={key}>
                          <Icon social={icon} size="m" />
                      </Link>
                  ))}
        </div>
    ));

    return <div className={cnFooter('Container')}>{nav}</div>;
};

export const Footer = (props) => {
    const { className, component: ComponentProp = 'footer' } = props;

    return (
        <ComponentProp {...props} className={cnFooter(null, [className])}>
            <FooterMenu menu={menu} />
        </ComponentProp>
    );
};

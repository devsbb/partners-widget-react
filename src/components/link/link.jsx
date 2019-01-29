import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Link = ({ className, children, href, onClick }) => (
    <a href={href} onClick={onClick} className={classNames('grover-widget-header-text', className)}>
        {children}
    </a>
);

Link.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
};

Link.defaultProps = {
    className: null,
    children: null,
    href: '#',
    onClick: () => {},
};

export default Link;

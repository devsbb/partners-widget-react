import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { preventDefaultClickHandler } from '../../utils';

const Link = ({ className, children, href, onClick, disabled, target }) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
        href={disabled ? '' : href}
        aria-disabled={disabled}
        onClick={disabled ? preventDefaultClickHandler : onClick}
        target={target}
        className={classNames('grover-link', className, {
            'grover-link--disabled': disabled,
        })}
    >
        {children}
    </a>
);

Link.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    target: PropTypes.string,
};

Link.defaultProps = {
    className: null,
    href: '#',
    onClick: () => {},
    disabled: PropTypes.bool,
    target: null,
};

export default Link;

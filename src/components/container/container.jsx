import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ children, className, ariaDisabled }) => (
    <article
        aria-disabled={ariaDisabled}
        className={classNames('grover-container', className)}
    >
        {children}
    </article>
);

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    ariaDisabled: PropTypes.bool,
};

Container.defaultProps = {
    className: null,
    ariaDisabled: false,
};

export default Container;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ children, className }) => (
    <article className={classNames('grover-container', className)}>
        {children}
    </article>
);

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

Container.defaultProps = {
    className: null,
    children: null,
};

export default Container;

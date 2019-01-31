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
    children: PropTypes.node.isRequired,
};

Container.defaultProps = {
    className: null,
};

export default Container;

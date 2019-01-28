import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Container = ({ children, className }) => (
    <article className={classNames('grover-widget-container', className)}>{children}</article>
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

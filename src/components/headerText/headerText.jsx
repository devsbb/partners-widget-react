import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const HeaderText = ({ className, children }) => (
    <h1 className={classNames('grover-widget-header-text', className)}>{children}</h1>
);

HeaderText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

HeaderText.defaultProps = {
    className: null,
    children: null,
};

export default HeaderText;

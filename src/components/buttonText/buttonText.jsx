import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const ButtonText = ({ className, children }) => (
    <p className={classNames('grover-widget-button-text', className)}>{children}</p>
);

ButtonText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

ButtonText.defaultProps = {
    className: null,
    children: null,
};

export default ButtonText;

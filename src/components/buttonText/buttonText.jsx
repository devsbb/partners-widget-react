import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonText = ({ className, children }) => (
    <p className={classNames('grover-button-text', className)}>{children}</p>
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

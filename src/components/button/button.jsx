import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ButtonText from '../buttonText';

const Button = ({ className, iconClassName, children, icon: Icon }) => (
    <button type="button" className={classNames('grover-button', className)}>
        {Icon && <Icon className={classNames('grover-button__icon', iconClassName)} />}
        <ButtonText>{children}</ButtonText>
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.element,
};

Button.defaultProps = {
    className: null,
    iconClassName: null,
    children: null,
    icon: null,
};

export default Button;

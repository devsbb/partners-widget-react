import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ButtonText from '../buttonText';

import { preventDefaultEventHandler } from '../../utils';

const Button = ({
    className,
    classNames,
    children,
    icon: Icon,
    onClick,
    disabled,
}) => (
    <button
        disabled={disabled}
        onClick={disabled ? preventDefaultEventHandler : onClick}
        type="button"
        className={cn('grover-button', className, {
            'grover-button--disabled': disabled,
        })}
    >
        {Icon && (
            <Icon className={cn('grover-button__icon', classNames.icon)} />
        )}
        <ButtonText className={classNames.text}>{children}</ButtonText>
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    classNames: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
    }),
    children: PropTypes.node.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    className: null,
    classNames: {
        icon: null,
        text: null,
    },
    icon: null,
    onClick: () => {},
    disabled: false,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ButtonText from '../buttonText';

const Button = ({ className, classNames, children, icon: Icon, onClick }) => (
    <button
        onClick={onClick}
        type="button"
        className={cn('grover-button', className)}
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
    icon: PropTypes.element,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: null,
    classNames: {
        icon: null,
        text: null,
    },
    icon: null,
    onClick: () => {},
};

export default Button;

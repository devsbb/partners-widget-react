import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ButtonText from '../buttonText';

import { preventDefaultClickHandler } from '../../utils';

const LinkButton = ({
    className,
    classNames,
    children,
    icon: Icon,
    href,
    target,
    disabled,
}) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
        href={disabled ? '' : href}
        onClick={disabled ? preventDefaultClickHandler : null}
        target={target}
        aria-disabled={disabled}
        className={cn('grover-button', className, {
            'grover-button--disabled': disabled,
        })}
    >
        {Icon && (
            <Icon className={cn('grover-button__icon', classNames.icon)} />
        )}
        <ButtonText className={classNames.text}>{children}</ButtonText>
    </a>
);

LinkButton.propTypes = {
    className: PropTypes.string,
    classNames: PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
    }),
    children: PropTypes.node.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    disabled: PropTypes.bool,
};

LinkButton.defaultProps = {
    className: null,
    classNames: {
        icon: null,
        text: null,
    },
    icon: null,
    target: null,
    disabled: false,
};

export default LinkButton;

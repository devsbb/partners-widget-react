import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ButtonText from '../buttonText';

const LinkButton = ({
    className,
    classNames,
    children,
    icon: Icon,
    href,
    target,
}) => (
    <a href={href} target={target} className={cn('grover-button', className)}>
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
    children: PropTypes.node,
    icon: PropTypes.element,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
};

LinkButton.defaultProps = {
    className: null,
    classNames: {
        icon: null,
        text: null,
    },
    children: null,
    icon: null,
    target: null,
};

export default LinkButton;

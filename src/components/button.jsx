import React from 'react';
import PropTypes from 'prop-types';

import ButtonText from './buttonText';

const defaultStyles = {
    backgroundColor: '#333333',
    height: '48px',
    borderRadius: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
};

const iconStyles = {
    marginRight: '16px',
};

const Button = ({ style, children, icon: Icon }) => {
    const newStyles = { ...defaultStyles, ...style };

    return (
        <button type="button" style={newStyles}>
            {Icon && <Icon style={iconStyles} />}
            <ButtonText>{children}</ButtonText>
        </button>
    );
};

Button.propTypes = {
    style: PropTypes.objectOf(PropTypes.object),
    children: PropTypes.node,
    icon: PropTypes.element,
};

Button.defaultProps = {
    style: {},
    children: null,
    icon: null,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
    fontSize: '16px',
    lineHeight: '22px',
    fontStyle: 'bold',
    color: 'white',
    marginTop: '0px',
    marginBottom: '0px',
};

const ButtonText = ({ style, children }) => {
    const newStyles = { ...defaultStyles, ...style };

    return <p style={newStyles}>{children}</p>;
};

ButtonText.propTypes = {
    style: PropTypes.objectOf(PropTypes.object),
    children: PropTypes.node,
};

ButtonText.defaultProps = {
    style: {},
    children: null,
};

export default ButtonText;

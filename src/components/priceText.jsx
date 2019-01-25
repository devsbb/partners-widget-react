import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
    fontSize: '16px',
    lineHeight: '27px',
    fontWeight: 500,
    color: '#333333',
    marginTop: '0px',
    marginBottom: '0px',
};

const PriceText = ({ style, children }) => {
    const newStyles = { ...defaultStyles, ...style };

    return <h2 style={newStyles}>{children}</h2>;
};

PriceText.propTypes = {
    style: PropTypes.objectOf(PropTypes.object),
    children: PropTypes.node,
};

PriceText.defaultProps = {
    style: {},
    children: null,
};

export default PriceText;

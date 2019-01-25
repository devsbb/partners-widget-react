import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
    fontSize: '12px',
    lineHeight: '17px',
    fontWeight: 'bold',
    color: '#989898',
    marginTop: '0px',
    marginBottom: '0px',
};

const Link = ({ style, children }) => {
    const newStyles = { ...defaultStyles, ...style };

    return <h1 style={newStyles}>{children}</h1>;
};

Link.propTypes = {
    style: PropTypes.objectOf(PropTypes.object),
    children: PropTypes.node,
};

Link.defaultProps = {
    style: {},
    children: null,
};

export default Link;

import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    color: '#333333',
    marginTop: '0px',
    marginBottom: '0px',
};

const HeaderText = ({ style, children }) => {
    const newStyles = { ...defaultStyles, ...style };

    return <h1 style={newStyles}>{children}</h1>;
};

HeaderText.propTypes = {
    style: PropTypes.objectOf(PropTypes.object),
    children: PropTypes.node,
};

HeaderText.defaultProps = {
    style: {},
    children: null,
};

export default HeaderText;

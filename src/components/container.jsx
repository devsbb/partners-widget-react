import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
    backgroundColor: '#f1f1f1',
    padding: '16px',
    borderRadius: '8px',
    minWidth: '400px',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'stretch',
    alignItems: 'center',
};

const Container = ({ style, children }) => {
    const newStyles = { ...defaultStyles, ...style };

    return <article style={newStyles}>{children}</article>;
};

Container.propTypes = {
    children: PropTypes.node,
    style: PropTypes.objectOf(PropTypes.object),
};

Container.defaultProps = {
    children: null,
    style: {},
};

export default Container;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderText = ({ className, children }) => (
    <h1 className={classNames('grover-header-text', className)}>{children}</h1>
);

HeaderText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

HeaderText.defaultProps = {
    className: null,
};

export default HeaderText;

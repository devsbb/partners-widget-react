import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PriceText = ({ className, children }) => (
    <h2 className={classNames('grover-price-text', className)}>{children}</h2>
);

PriceText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

PriceText.defaultProps = {
    className: null,
};

export default PriceText;

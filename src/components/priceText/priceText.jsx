import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PriceText = ({ className, children }) => (
    <p className={classNames('grover-price-text', className)}>{children}</p>
);

PriceText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

PriceText.defaultProps = {
    className: null,
};

export default PriceText;

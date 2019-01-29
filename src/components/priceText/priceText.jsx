import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const PriceText = ({ className, children }) => (
    <h2 className={classNames('grover-widget-price-text', className)}>{children}</h2>
);

PriceText.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

PriceText.defaultProps = {
    className: null,
    children: null,
};

export default PriceText;

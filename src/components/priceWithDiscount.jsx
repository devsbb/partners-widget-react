import React from 'react';
import PropTypes from 'prop-types';

import Price from './price';

const priceWithDiscountStyles = {
    color: '#FE1251',
    marginLeft: '4px',
};

const oldPriceStyles = {
    fontSize: '16px',
    lineHeight: '22px',
    textDecoration: 'line-through',
};

const defaultStyles = {};

const PriceWithDiscount = ({ style, oldPriceInCents, priceWithDiscountInCents }) => {
    const newStyles = { ...defaultStyles, ...style };

    return (
        <span style={newStyles}>
            <Price style={oldPriceStyles} priceInCents={oldPriceInCents} />
            <Price style={priceWithDiscountStyles} priceInCents={priceWithDiscountInCents} />
        </span>
    );
};

PriceWithDiscount.propTypes = {
    oldPriceInCents: PropTypes.number.isRequired,
    priceWithDiscountInCents: PropTypes.number.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
};

PriceWithDiscount.defaultProps = {
    style: {},
};

export default PriceWithDiscount;

import React from 'react';
import PropTypes from 'prop-types';

import { formatPriceInCents } from '../utils';

const defaultStyles = {
    color: '#333333',
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 'bold',
};

const Price = ({ style, priceInCents }) => {
    const newStyles = { ...defaultStyles, ...style };
    const formattedPrice = formatPriceInCents(priceInCents);

    return <strong style={newStyles}>{formattedPrice}</strong>;
};

Price.propTypes = {
    priceInCents: PropTypes.number.isRequired,
    style: PropTypes.objectOf(PropTypes.object),
};

Price.defaultProps = {
    style: {},
};

export default Price;

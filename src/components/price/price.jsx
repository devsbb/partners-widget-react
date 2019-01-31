import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { formatPriceInCents } from '../../utils';

const Price = ({ className, priceInCents }) => {
    const formattedPrice = formatPriceInCents(priceInCents);

    return (
        <strong className={classNames('grover-price', className)}>
            {formattedPrice}
        </strong>
    );
};

Price.propTypes = {
    priceInCents: PropTypes.number.isRequired,
    className: PropTypes.string,
};

Price.defaultProps = {
    className: null,
};

export default Price;

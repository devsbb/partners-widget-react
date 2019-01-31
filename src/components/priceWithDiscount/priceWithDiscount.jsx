import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Price from '../price';

const PriceWithDiscount = ({
    className,
    classNames,
    oldPriceInCents,
    priceWithDiscountInCents,
}) => (
    <span className={cn('grover-price-with-discount', className)}>
        <Price
            key="oldPrice"
            className={cn(
                'grover-price-with-discount__old-price',
                classNames.oldPrice
            )}
            priceInCents={oldPriceInCents}
        />
        <Price
            key="priceWithDiscount"
            className={cn(
                'grover-price-with-discount__price-with-discount',
                classNames.priceWithDiscount
            )}
            priceInCents={priceWithDiscountInCents}
        />
    </span>
);

PriceWithDiscount.propTypes = {
    oldPriceInCents: PropTypes.number.isRequired,
    priceWithDiscountInCents: PropTypes.number.isRequired,
    className: PropTypes.string,
    classNames: PropTypes.shape({
        oldPrice: PropTypes.string,
        priceWithDiscount: PropTypes.string,
    }),
};

PriceWithDiscount.defaultProps = {
    className: null,
    classNames: {
        oldPrice: null,
        priceWithDiscount: null,
    },
};

export default PriceWithDiscount;
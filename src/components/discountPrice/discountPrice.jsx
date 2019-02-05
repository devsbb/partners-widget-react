import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Price from '../price';

const DiscountPrice = ({
    className,
    classNames,
    originalPriceInCents,
    discountPriceInCents,
}) => (
    <span className={className}>
        <Price
            key="originalPrice"
            className={cn(
                'grover-discount-price__original-price',
                classNames.originalPrice
            )}
            priceInCents={originalPriceInCents}
        />
        <Price
            key="discountPrice"
            className={cn(
                'grover-discount-price__discount-price',
                classNames.discountPrice
            )}
            priceInCents={discountPriceInCents}
        />
    </span>
);

DiscountPrice.propTypes = {
    originalPriceInCents: PropTypes.number.isRequired,
    discountPriceInCents: PropTypes.number.isRequired,
    className: PropTypes.string,
    classNames: PropTypes.shape({
        originalPrice: PropTypes.string,
        discountPrice: PropTypes.string,
    }),
};

DiscountPrice.defaultProps = {
    className: null,
    classNames: {
        originalPrice: null,
        discountPrice: null,
    },
};

export default DiscountPrice;

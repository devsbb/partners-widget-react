import React from 'react';
import PropTypes from 'prop-types';

import PriceText from '../priceText';
import Price from '../price';
import DiscountPrice from '../discountPrice';

const ProductPrice = ({
    className,
    classNames,
    discountPriceInCents,
    originalPriceInCents,
    minimalPrice,
}) => (
    <PriceText className={className}>
        {minimalPrice && 'ab'}
        {discountPriceInCents ? (
            <DiscountPrice
                className={classNames.discountPriceContainer}
                classNames={{
                    discountPrice: classNames.discountPrice,
                    originalPrice: classNames.originalPrice,
                }}
                discountPriceInCents={discountPriceInCents}
                originalPriceInCents={originalPriceInCents}
            />
        ) : (
            <Price
                className={classNames.price}
                priceInCents={originalPriceInCents}
            />
        )}
        {'pro Monat'}
    </PriceText>
);

ProductPrice.propTypes = {
    className: PropTypes.string,
    classNames: PropTypes.shape({
        price: PropTypes.string,
        discountPriceContainer: PropTypes.string,
        discountPrice: PropTypes.string,
        originalPrice: PropTypes.string,
    }),
    minimalPrice: PropTypes.bool,
    discountPriceInCents: PropTypes.number,
    originalPriceInCents: PropTypes.number,
};

ProductPrice.defaultProps = {
    className: null,
    classNames: {
        price: null,
        discountPriceContainer: null,
        discountPrice: null,
        originalPrice: null,
    },
    minimalPrice: false,
    discountPriceInCents: 0,
    originalPriceInCents: 0,
};

export default ProductPrice;

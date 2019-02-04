import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
        {minimalPrice && (
            <span className="grover-product-price__starting-price-text">
                ab
            </span>
        )}
        {discountPriceInCents ? (
            <DiscountPrice
                className={cn(
                    'grover-product-price__price-container',
                    classNames.discountPriceContainer
                )}
                classNames={{
                    discountPrice: classNames.discountPrice,
                    originalPrice: classNames.originalPrice,
                }}
                discountPriceInCents={discountPriceInCents}
                originalPriceInCents={originalPriceInCents}
            />
        ) : (
            <Price
                className={cn(
                    'grover-product-price__price-container',
                    classNames.price
                )}
                priceInCents={originalPriceInCents}
            />
        )}
        <span className="grover-product-price__periodicity-text">
            pro Monat
        </span>
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
    minimalPrice: PropTypes.bool.isRequired,
    discountPriceInCents: PropTypes.number,
    originalPriceInCents: PropTypes.number.isRequired,
};

ProductPrice.defaultProps = {
    className: null,
    classNames: {
        price: null,
        discountPriceContainer: null,
        discountPrice: null,
        originalPrice: null,
    },
    discountPriceInCents: null,
};

export default ProductPrice;

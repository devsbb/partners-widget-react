import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PriceText from '../priceText';
import Price from '../price';
import DiscountPrice from '../discountPrice';
import FormattedMessage from '../formattedMessage';

const ProductPrice = ({
    className,
    classNames,
    discountPriceInCents,
    originalPriceInCents,
    minimalPrice,
    showOnlyDiscountedPrice,
}) => {
    const showPrice = () => {
        if (discountPriceInCents) {
            if (showOnlyDiscountedPrice) {
                return (
                    <Price
                        className={cn(
                            'grover-product-price__price-container',
                            classNames.price
                        )}
                        priceInCents={discountPriceInCents}
                    />
                );
            }

            return (
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
            );
        }

        return (
            <Price
                className={cn(
                    'grover-product-price__price-container',
                    classNames.price
                )}
                priceInCents={originalPriceInCents}
            />
        );
    };

    return (
        <PriceText className={className}>
            {minimalPrice && (
                <span className="grover-product-price__starting-price-text">
                    <FormattedMessage translationKey="STARTING_PRICE" />
                </span>
            )}
            {showPrice()}
            <span className="grover-product-price__periodicity-text">
                <FormattedMessage translationKey="PERIODICITY" />
            </span>
        </PriceText>
    );
};

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
    showOnlyDiscountedPrice: PropTypes.bool,
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
    showOnlyDiscountedPrice: false,
};

export default ProductPrice;

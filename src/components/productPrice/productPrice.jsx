import React from 'react';
import PropTypes from 'prop-types';

import PriceText from '../priceText';
import Price from '../price';
import PriceWithDiscount from '../priceWithDiscount';

const ProductPrice = ({ className, classNames, priceInCents, oldPriceInCents, minimalPrice }) => (
    <PriceText className={className}>
        {minimalPrice && 'ab'}
        {oldPriceInCents ? (
            <PriceWithDiscount
                className={classNames.priceWithDiscount.container}
                classNames={{
                    priceWithDiscount: classNames.priceWithDiscount.priceWithDiscount,
                }}
                priceWithDiscountInCents={priceInCents}
                oldPriceInCents={oldPriceInCents}
            />
        ) : (
            <Price className={classNames.price} priceInCents={priceInCents} />
        )}
        {'pro Monat'}
    </PriceText>
);

ProductPrice.propTypes = {
    className: PropTypes.string,
    classNames: PropTypes.shape({
        price: PropTypes.string,
        priceWithDiscount: PropTypes.shape({
            container: PropTypes.string,
            oldPrice: PropTypes.string,
            priceWithDiscount: PropTypes.string,
        }),
    }),
    minimalPrice: PropTypes.bool,
    priceInCents: PropTypes.number,
    oldPriceInCents: PropTypes.number,
};

ProductPrice.defaultProps = {
    className: null,
    classNames: {
        price: null,
        priceWithDiscount: {
            container: null,
            oldPrice: null,
            priceWithDiscount: null,
        },
    },
    minimalPrice: false,
    priceInCents: 0,
    oldPriceInCents: 0,
};

export default ProductPrice;

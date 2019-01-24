import React from 'react';

import { storiesOf } from '@storybook/react';

import { Price, PriceWithDiscount } from '../../src/components';

export default function init() {
    storiesOf('Price', module)
        .add('without discount', () => <Price priceInCents={19999} />)
        .add('with discount', () => (
            <PriceWithDiscount oldPriceInCents={19999} priceWithDiscountInCents={14999} />
        ));
}

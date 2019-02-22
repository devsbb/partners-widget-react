import React from 'react';

import { storiesOf } from '@storybook/react';

import { Price, DiscountPrice } from '../../entrypoints/storybook';

export default function init() {
    storiesOf('Price', module)
        .add('without discount', () => <Price priceInCents={19999} />)
        .add('with discount', () => (
            <DiscountPrice
                originalPriceInCents={19999}
                discountPriceInCents={14999}
            />
        ));
}

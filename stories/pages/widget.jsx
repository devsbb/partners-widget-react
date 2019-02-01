import React from 'react';

import { storiesOf } from '@storybook/react';

import Widget from '../../src';

export default function init() {
    storiesOf('Partners widget', module)
        .add('Widget with discount', () => (
            <Widget
                productName="Jetzt mieten statt kaufen"
                price={{
                    originalPriceInCents: 5299,
                    discountPriceInCents: 4890,
                    minimalPrice: true,
                }}
                checkoutUrl="https://getgrover.com"
            />
        ))
        .add('Widget with minimal price', () => (
            <Widget
                productName="Jetzt mieten statt kaufen"
                price={{
                    originalPriceInCents: 5299,
                    minimalPrice: true,
                }}
                checkoutUrl="https://getgrover.com"
            />
        ))
        .add('Widget with discount', () => (
            <Widget
                productName="Jetzt mieten statt kaufen"
                price={{
                    originalPriceInCents: 5299,
                    discountPriceInCents: 4890,
                    minimalPrice: true,
                }}
                checkoutUrl="https://getgrover.com"
            />
        ))
        .add('Widget is unavailable', () => (
            <Widget
                productName="Jetzt mieten statt kaufen"
                price={{
                    originalPriceInCents: 5299,
                    discountPriceInCents: 4890,
                    minimalPrice: true,
                }}
                checkoutUrl="https://getgrover.com"
                unavailable
            />
        ));
}

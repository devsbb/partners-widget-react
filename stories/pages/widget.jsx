import React from 'react';

import { storiesOf } from '@storybook/react';

import Widget from '../../src';

export default function init() {
    storiesOf('Partners widget', module).add('Widget', () => (
        <Widget
            productName="Jetzt mieten statt kaufen"
            productPrice={{
                originalPriceInCents: 5299,
                discountPriceInCents: 4890,
                minimalPrice: true,
            }}
        />
    ));
}

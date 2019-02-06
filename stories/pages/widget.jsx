import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Widget } from '../../src/components';
import DefaultWidget from '../../src';
import { StockLevelEnum } from '../../src/utils';

export default function init() {
    storiesOf('Partners widget', module)
        .add('Widget with discount', () => (
            <Widget
                productName="Jetzt mieten statt kaufen"
                price={{
                    originalPriceInCents: 5299,
                    discountPriceInCents: 4890,
                    minimalPrice: false,
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
        .add('Widget with discount and minimal price', () => (
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
                    minimalPrice: false,
                }}
                checkoutUrl="https://getgrover.com"
                unavailable
            />
        ))
        .add('Widget with API integration', () => (
            <DefaultWidget
                accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdG9yZV9jb2RlIjoibWVkaWFtYXJrdCJ9.bm1niEepZwp2PgvNj9PGxyIpYD0MRF6X1SOOS5ehDxY"
                articleId="123123123"
                stock={StockLevelEnum.medium}
                eans={['12345', '123456', '12345667']}
                deliveryDate="2019-06-02"
                deliveryTime="1-3"
                moreInformationCallback={action(
                    'moreInformationCallback is called'
                )}
            />
        ));
}

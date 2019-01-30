import React from 'react';

import { GroverIcon } from '../../icons';

import Container from '../container';
import Button from '../button';
import ProductPrice from '../productPrice';
import HeaderText from '../headerText';
import Link from '../link';

import HeaderSection from './headerSection';

const Widget = () => (
    <Container>
        <HeaderSection className="grover-widget__header-section">
            <HeaderText>Jetzt mieten statt kaufen</HeaderText>
            <Link className="grover-widget__more-info-link" href="#more-info">
                more info
            </Link>
        </HeaderSection>
        <ProductPrice
            className="grover-widget__product-price"
            priceInCents={19999}
            oldPriceInCents={29999}
            minimalPrice
        />
        <Button icon={GroverIcon}>Mieten mit Grover</Button>
    </Container>
);

export default Widget;

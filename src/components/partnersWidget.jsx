import React from 'react';

import { GroverIcon } from '../icons';

import Container from './container';
import Button from './button';
import ProductPrice from './productPrice';
import HeaderText from './headerText';

const PartnersWidget = () => (
    <Container>
        <HeaderText>Jetzt mieten statt kaufen</HeaderText>
        <ProductPrice priceInCents={19999} oldPriceInCents={29999} minimalPrice />
        <Button icon={GroverIcon}>Mieten mit Grover</Button>
    </Container>
);

export default PartnersWidget;

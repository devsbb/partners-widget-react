import React from 'react';

import { GroverIcon } from '../icons';

import Container from './container';
import Button from './button';
import Price from './price';

const PartnersWidget = () => (
    <Container>
        <Price priceInCents={19999} />
        <Button icon={GroverIcon}>Mieten mit Grover</Button>
    </Container>
);

export default PartnersWidget;

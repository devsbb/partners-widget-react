import React from 'react';

import Container from './container';
import Button from './button';
import GroverIcon from './groverIcon';
import Price from './price';

const PartnersWidget = () => (
    <Container>
        <Price priceInCents={19999} />
        <Button icon={GroverIcon}>Mieten mit Grover</Button>
    </Container>
);

export default PartnersWidget;

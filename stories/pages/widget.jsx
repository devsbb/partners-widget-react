import React from 'react';

import { storiesOf } from '@storybook/react';

import { PartnersWidget } from '../../src/components';

export default function init() {
    storiesOf('Partners widget', module).add('PartnersWidget', () => <PartnersWidget />);
}

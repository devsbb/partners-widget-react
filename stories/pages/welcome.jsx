import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

export default function init() {
    storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
}

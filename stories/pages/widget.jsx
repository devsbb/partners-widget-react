import React from 'react';

import { storiesOf } from '@storybook/react';

import Widget from '../../src';

export default function init() {
    storiesOf('Partners widget', module).add('Widget1', () => <Widget />);
}

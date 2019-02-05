import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../src/components';
import { GroverIcon } from '../../src/icons';

export default function init() {
    storiesOf('Button', module)
        .add('with text', () => (
            <Button onClick={action('clicked')}>Mieten mit Grover</Button>
        ))
        .add('with text and grover logo', () => (
            <Button icon={GroverIcon} onClick={action('clicked')}>
                Mieten mit Grover
            </Button>
        ));
}

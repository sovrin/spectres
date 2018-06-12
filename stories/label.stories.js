import React from 'react';
import {storiesOf} from '@storybook/react';

import Label from '../src/components/Label';
import {select, boolean} from "../.storybook/addons";

storiesOf('Label', module)
    .add('Plain', () =>
        <Label>Plain</Label>,
    )
    .add('Type', () =>
        <Label type={select('Type', Label.Type, 'default')}>Plain</Label>,
    )
    .add('Rounded', () =>
        <Label rounded={boolean('Rounded')}>Plain</Label>,
    )
;

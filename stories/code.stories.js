import React from 'react';
import {storiesOf} from '@storybook/react';

import Code from '../src/components/Code';
import {text} from "../.storybook/addons";

storiesOf('Code', module)
    .add('Plain', () =>
        <Code lang={text('Language', 'HTML')}>{text('Body', '<div>hello world</div>')}</Code>,
    )
;

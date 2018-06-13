import React from 'react';
import {storiesOf} from '@storybook/react';

import Toast from '../src/components/Toast';
import Button from '../src/components/Button';
import Toasts from '../src/managers/Toasts';

import {text} from '../.storybook/addons';

const manager = Toasts.getManager();

storiesOf('Toast', module)
    .add('Plain', () =>
        <Toast title={text('Language', 'HTML')} timed={true}>{text('Body', '<div>hello world</div>')}</Toast>,
    )
    .add('Manager', () => {
            return <div>
                <Toasts manager={manager}/>
                <Button onClick={() => manager.show(<Toast timed>{Math.random(20) * 10}</Toast>)}>Add toast</Button>
            </div>
        },
    )
;

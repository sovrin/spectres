import React from 'react';
import {storiesOf} from '@storybook/react';

import Icon from '../src/components/Icon';

const icon = (props) => (
    <div style={{padding: '15px 5px'}}>
        <Icon {...props}/> {props.type}
    </div>
);

const icons = () => Object
    .keys(Icon.Type)
    .map((key) => icon({type: Icon.Type[key]}))
;

storiesOf('Icon', module)
    .add('Plain', () => icons())
    .add('Sizes', () => [
        icon({type: Icon.Type.MENU}),
        icon({type: Icon.Type.MENU, size: Icon.Size.BIG}),
        icon({type: Icon.Type.MENU, size: Icon.Size.BIGGER}),
        icon({type: Icon.Type.MENU, size: Icon.Size.BIGGEST})
    ])
;

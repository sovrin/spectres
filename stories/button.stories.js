/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';
import {oneOfConstants} from 'utils';

// import Group from '../src/components/Group';

import Button from '../src/components/Button';
const {Error, Success} = Button;
import {select} from "../.storybook/addons";

// const button = (props = {}, text = '') => (
//     <Button {...props}>{text}</Button>
// );

const stories = storiesOf('Button', module);

stories
    .add('Sizes', () =>
        <Button size={select('Size', Button.Size)}>Sizes</Button>
    )
;

storiesOf('Button', module)
    .add('Themes', () => [
        <Success>Success</Success>,
        <Error>Error</Error>,
    ])
;

// storiesOf('Button', module)
//     .add('Sizes', () => [
//         button({size: Button.Size.SMALL}, 'small'),
//         button({}, 'normal'),
//         button({size: Button.Size.LARGE}, 'large'),
//     ])
// ;

storiesOf('Button', module)
    .add('States', () => [
        'active', 'disabled', 'loading'
    ].map(state => button({[state]: true}, state)))
;

// storiesOf('Button', module)
//     .add('Knob', () => (
//         <Button size={select('Size', '')}></Button>
//     ))

storiesOf('Button', module)
    .add('Groups', () => [
            <Group>
                <Button active>First</Button>
                <Button>Second</Button>
                <Button>Third</Button>
            </Group>,
            <br/>,
            <Group>
                <Button active primary>First</Button>
                <Button primary>Second</Button>
                <Button primary>Third</Button>
            </Group>
        ]
    )
;

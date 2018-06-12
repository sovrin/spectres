import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';
import {withKnobs} from '@storybook/addon-knobs/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

const loadStories = () => (
    req.keys().forEach((filename) => req(filename))
);

const style = {
    textAlign: 'center',
    margin: '50px 25px',
    background: '#FCFCFC',
    padding: '25px 10px',
    border: '1px solid #F0F0F0',
    borderRadius: '2px'
};

addDecorator(story => <div style={style}>{story()}</div>);
addDecorator(withKnobs);
configure(loadStories, module);
// setOptions({downPanelInRight: true});

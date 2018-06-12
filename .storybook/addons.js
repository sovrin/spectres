// import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-knobs/register'
import '@storybook/addon-options/register';

import {text, boolean, number, select as _select} from '@storybook/addon-knobs/react';

const select = (name, options, def = null) => (
    _select(
        name,
        Object.keys(options).map(key => options[key]),
        def
    )
);

export {
    select, boolean, text, number
};

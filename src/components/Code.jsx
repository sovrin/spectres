// @flow

import React from 'react'
import Element from "./Element";
import PropTypes from "prop-types";
import {cc} from '../utils';

/**
 * User: N <n@sovrin.de>
 * Date: 13.06.2018
 * Time: 00:13
 */
export default class Code extends Element {

    static propTypes = {
        lang: PropTypes.string
    };

    /**
     *
     * @returns {*}
     */
    render() {
        let {className, children, lang} = this.props;

        className = cc('code', className);

        return (
            <pre className={className} data-lang={lang}><code>{children}</code></pre>
        );
    }
}
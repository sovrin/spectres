// @flow

import React from "react";
import PropTypes from "prop-types";
import Element from "./Element";
import {cc, oneOfConstants} from "../utils";

/**
 * User: N <n@sovrin.de>
 * Date: 12.06.2018
 * Time: 23:39
 */
export default class Label extends Element {

    static Type = {
        DEFAULT: '',
        PRIMARY: 'primary',
        SECONDARY: 'secondary',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error'
    };

    static propTypes = {
        rounded: PropTypes.bool,
        type: oneOfConstants(Label.Type)
    };

    /**
     *
     * @returns {*}
     */
    render() {
        let {className, children, type, rounded} = this.props;

        className = cc('label', className, {
            ['label-' + type]: (type),
            ['label-rounded']: (rounded),
            rounded
        });

        return (
            <span className={className}>
                {children}
            </span>
        );
    }
}
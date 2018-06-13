// @flow

import React from 'react';
import Element from './Element';
import Button from './Button';
import PropTypes from 'prop-types';
import {cc, oneOfConstants} from '../utils';

/**
 * User: N <n@sovrin.de>
 * Date: 13.06.2018
 * Time: 00:23
 */
export default class Toast extends Element {

    static Type = {
        DEFAULT: '',
        PRIMARY: 'primary',
        SUCCESS: 'success',
        WARNING: 'warning',
        ERROR: 'error',
    };

    static propTypes = {
        title: PropTypes.string,
        type: oneOfConstants(Toast.Type),
        timed: PropTypes.bool,
        onClose: PropTypes.func,
        closing: PropTypes.bool,
    };

    /**
     *
     */
    componentDidMount() {
        const {timed, onClose} = this.props;

        if (timed) {
            this.timeout = setTimeout(() => {
                onClose && onClose();
            }, 10 * 1000);
        }
    }

    timeout = null;

    /**
     *
     * @returns {*}
     */
    render() {
        let {className, children, title, timed, closing, onClose} = this.props;

        className = cc('toast', className, {
            timed,
            closing,
        });

        return (
            <div
                className={className}
                onAnimationEnd={() => closing && onClose && onClose()}
            >
                <Button
                    clear
                    float={{right: true}}
                    onClick={() => onClose()}
                />
                {(title) && <h6>{title}</h6>}
                {children}
            </div>
        );
    }
}
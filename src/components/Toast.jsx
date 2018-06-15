// @flow

import React from 'react';
import Element from './Element';
import Button from './Button';
import PropTypes from 'prop-types';
import Timer from '../libs/Timer';
import {cc, oneOfConstants} from '../utils';

const TIME = 1000 * 2;

type State = {
    closing: boolean
};

const Animation = {
    FADEIN: 'fade-in',
    FADEOUT: 'fade-out',
};

/**
 * User: N <n@sovrin.de>
 * Date: 13.06.2018
 * Time: 00:23
 */
export default class Toast extends Element<any, *> {

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

    timer: Timer;


    state = {
        closing: false,
        animation: Animation.FADEIN,
    };

    /**
     *
     */
    constructor() {
        super();

        this.timer = new Timer(() => this.close(), TIME);
    }

    /**
     *
     */
    componentDidMount() {
        const {timed} = this.props;

        if (timed) {
            this.timer.start();
        }
    }

    /**
     *
     */
    close(start: boolean = false) {
        const {props, state, timer} = this;
        const {onClose} = props;
        const {animation, closing} = state;

        if (start && !timer.done()) {
            return;
        }



        if (animation === Animation.FADEOUT && timer.done()) {
            onClose();
        }

        this.setState({
            closing: !start,
            animation: Animation.FADEOUT,
        });
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const {timer, props, state} = this;
        const {closing, animation} = state;
        let {className, children, title, timed, onClose} = props;
        const style = {};

        className = cc('toast', className, {
            timed,
            closing,
        });

        if (timed) {
            style.animationDuration = (TIME / 1000) + 's';
        }

        return (
            <div
                className={className}
                style={{animationName: animation}}
                onMouseOver={() => timer.pause()}
                onMouseLeave={() => timer.resume()}
                onAnimationEnd={() => this.close(true)}
            >
                <Button
                    clear
                    float={{right: true}}
                    onClick={() => onClose()}
                />
                {(title) && <h6>{title}</h6>}
                {children}

                <div
                    className="timer"
                    style={style}
                />
            </div>
        );
    }
}
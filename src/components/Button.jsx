import React from 'react'
import Element from "./Element";
import PropTypes from "prop-types";
import {cc, oneOfConstants} from 'utils';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Success = (props) => <Button {...Button.Presets.SUCCESS} {...props}/>;

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Error = (props) => <Button {...Button.Presets.ERROR} {...props}/>;

/**
 * User: N <n@sovrin.de>
 * Date: 15.03.2018
 * Time: 20:46
 */
export default class Button extends Element {

    static Size = {
        LARGE: 'lg',
        SMALL: 'sm'
    };

    static Presets = {
        SUCCESS: {
            success: true
        },
        ERROR: {
            error: true
        }
    };

    static propTypes = {
        action: PropTypes.bool,
        active: PropTypes.bool,
        block: PropTypes.bool,
        circle: PropTypes.bool,
        disabled: PropTypes.bool,
        error: PropTypes.bool,
        link: PropTypes.bool,
        loading: PropTypes.bool,
        primary: PropTypes.bool,
        size: oneOfConstants(Button.Size),
        success: PropTypes.bool,
    };

    static Success = Success;

    static Error = Error;

    /**
     *
     * @returns {*}
     */
    render() {

        let {
            className,
            children,
            action,
            active,
            block,
            circle,
            disabled,
            error,
            link,
            loading,
            primary,
            size,
            success,
            ..._left
        } = this.props;

        className = cc('btn', className, {
            ['btn-action']: (action),
            active,
            ['btn-block']: (block),
            circle,
            disabled,
            ['btn-error']: (error),
            ['btn-link']: (link),
            loading,
            ['btn-primary']: (primary),
            ['btn-' + size]: (size),
            ['btn-success']: (success),
        });

        return (
            <div
                className={className}
                children={children}
                {..._left}
            />
        );
    }
}

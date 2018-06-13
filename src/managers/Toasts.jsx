// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {cc, oneOfConstants} from '../utils';
import Toast from '../components/Toast';

const INIT_SYMBOL = Symbol('init');

/**
 * User: N <n@sovrin.de>
 * Date: 12.06.2018
 * Time: 21:39
 */
export default class Toasts extends React.Component {

    static Vertical = {
        TOP: 'top',
        CENTER: 'center',
        BOTTOM: 'bottom',
    };

    static Horizontal = {
        LEFT: 'left',
        CENTER: 'center',
        RIGHT: 'right',
    };

    static propTypes = {
        manager: PropTypes.shape({
            _context: null,
            [INIT_SYMBOL]: PropTypes.func,
            show: PropTypes.func,
            hide: PropTypes.func
        }),
        vertical: oneOfConstants(Toasts.Vertical),
        horizontal: oneOfConstants(Toasts.Horizontal),
    };

    static defaultProps = {
        vertical: Toasts.Vertical.BOTTOM,
        horizontal: Toasts.Horizontal.RIGHT,
    };


    static getManager() {
        return {
            _context: null,
            [INIT_SYMBOL](context) {
                this._context = context;
            },
            show(toast: Toast, props: ?any, cb: ?(any) => void) {
                const {props: {onOpen, horizontal}, state: {toasts}, ids} = this._context;
                const nextId = ids + 1;

                const element = React.cloneElement(toast, {
                    onClose: () => this._context.remove('#toast_' + nextId),
                    id: '#toast_' + nextId,
                    props,
                    alignment: horizontal
                });

                toasts.push(element);

                onOpen && onOpen();
                cb && cb();

                this._context.setState({toasts});
                this._context.ids = nextId;
            },
            hide(id) {
                this._context.remove('#toast_' + id);
            },
        };
    }

    ids = 0;

    state = {
        toasts: [],
        cb: null,
        props: null,
    };

    /**
     *
     */
    componentDidMount() {
        const {manager} = this.props;

        manager[INIT_SYMBOL](this);
    }

    /**
     *
     * @param id
     */
    remove(id) {
        const {toasts} = this.state;

        this.setState({
            toasts: toasts
                .filter(({props}) => props.id !== id),
        });
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const {toasts} = this.state;

        if (!toasts) {
            return null;
        }

        return (
            <div className="toasts">
                {toasts}
            </div>
        );
    }
}
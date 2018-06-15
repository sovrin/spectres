// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import {cc, oneOfConstants} from '../utils';

/**
 * User: N <n@sovrin.de>
 * Date: 12.06.2018
 * Time: 21:39
 */
export default class Toasts extends React.Component<any, any> {

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
            _context: PropTypes.instanceOf(Toasts),
            _init: PropTypes.func,
            dispatch: PropTypes.func
        }),
        vertical: oneOfConstants(Toasts.Vertical),
        horizontal: oneOfConstants(Toasts.Horizontal),
    };

    static defaultProps = {
        vertical: Toasts.Vertical.BOTTOM,
        horizontal: Toasts.Horizontal.RIGHT,
    };

    /**
     *
     * @return {*}
     */
    static getManager() {
        return {
            _context: null,
            _init(context: Toasts) {
                this._context = context;
            },
            dispatch(toast: Node, props: ?React.ElementProps, cb: ?(any) => void) {
                const {props: {onOpen, horizontal}, state: {toasts}} = this._context;
                const id = `toast-${Date.now()}${Math.random()}`;

                const element = React.cloneElement(toast, {
                    key: id,
                    id,
                    props,
                    alignment: horizontal,
                    onClose: () => this._context.remove(id),
                });

                toasts.push(element);

                onOpen && onOpen();
                cb && cb();

                this._context.setState({toasts});
            },
        };
    }

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

        manager._init(this);
    }

    /**
     *
     * @param id
     */
    remove(id: string) {
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
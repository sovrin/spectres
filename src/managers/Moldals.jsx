// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {cc, oneOfConstants} from '../utils';
import Modal from '../components/Modal';

/**
 * User: N <n@sovrin.de>
 * Date: 12.06.2018
 * Time: 21:39
 */
export default class Modals extends React.Component {

    static propTypes = {
        manager: PropTypes.shape({
            _context: null,
            _init: PropTypes.func,
            show: PropTypes.func,
            hide: PropTypes.func,
        }),
    };

    static getManager() {
        return {
            _context: null,
            _init(context) {
                this._context = context;
            },
            show(modal: Toast, props: ?any, cb: ?(any) => void) {
                const {props: {onOpen}} = this._context;

                onOpen && onOpen();

                this._context.setState({modal, props, cb});
            },
            hide() {
                const {state: {cb}, props: {onClose}} = this._context;
                cb && cb();
                onClose && onClose();

                this._context.setState({modal: null, props: null, cb: null});
            },
        };
    }

    state = {
        modal: null,
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
     * @returns {*}
     */
    render() {
        const {toast} = this.state;

        if (!modal) {
            return <div>&nbsp;</div>;
        }

        const close = () => this.setState({modal: null});

        return (
            <div className="toasts">
                {toast}
            </div>
        );
    }
}
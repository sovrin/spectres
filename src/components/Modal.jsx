import React from "react";
import Element from "./Element";
import {cc, oneOfConstants} from 'utils';

const Header = ({className, children, ..._left}) => (
    <div className={cc("modal-header", className)} {..._left}>
        <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
        <div className="modal-title h5">{children}</div>
    </div>
);

const Body = ({className, children, ..._left}) => (
    <div className={cc("modal-body", className)} {..._left}>
        <div className="content">
            {children}
        </div>
    </div>
);


const Footer = () => (
    <div className="modal-footer">
        ...
    </div>
);

/**
 * User: N <n@sovrin.de>
 * Date: 16.03.2018
 * Time: 19:48
 */
export default class Modal extends Element {

    state = {
        modal: null
    };

    getController() {
        return {
            _modal: null,
            _context: null,
            setContext(context) {
                this._context = context;
            },
            show(modal) {
                this._context.setState({modal});
            },
            close() {
                this._context.setState({modal: null});
            }
        }
    }

    /**
     *
     * @returns {*}
     */
    render() {
        let {className, children, active, overlay, ..._left} = this.props;

        className = cc('modal', {active});

        return (
            <div
                className={className}
                {..._left}
            >
                {(overlay) && <a className="modal-overlay" aria-label="Close"/>}

                <div className={cc("modal-container", className)} {..._left}>
                    {children}
                </div>
            </div>
        )
    }
}

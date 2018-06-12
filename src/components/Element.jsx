import {Component} from 'react';

/**
 * User: N <n@sovrin.de>
 * Date: 15.03.2018
 * Time: 21:16
 */
export default class Element extends Component {

    /**
     *
     */
    constructor() {
        super();

        if (new.target === Element) {
            throw new TypeError("Can not construct Abstract Element Component directly!");
        }
    }
}

import PropTypes from 'prop-types';

/**
 * functional switchCase
 *
 * @param c cases
 * @param k key
 * @param d default
 */
const switchcase = (c, k, d) => (
    c[k]
        ? op(c[k])
        : op(d)
);

/**
 * Execute if is function
 *
 * @param f
 */
const op = (f) => (
    (f instanceof Function)
        ? f()
        : f
);

/**
 *
 * @param cls
 * @return {string}
 */
const cc = (...cls) => (
    cls
        .filter(c => c)
        .map(c => switchcase({
            [Array]: () => cc(...c),
            [Object]: () => Object.keys(c).filter(i => c[i]).join(' '),
        }, c.constructor, c))
        .join(' ')
        .trim()
);

/**
 *
 * @param keys
 * @returns {shim}
 */
const oneOfConstants = (keys) => (
    PropTypes.oneOf(
        Object.keys(keys).map(key => keys[key]),
    )
);

/**
 *
 * @param needle
 * @param haystack
 * @returns {boolean}
 */
const includes = (needle, haystack) => (
    haystack.indexOf(needle) > -1
);

module.exports = {
    cc,
    includes,
    switchcase,
    oneOfConstants,
};

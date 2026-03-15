/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;  // flag to track if fn has been called

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;  // return undefined if already called
    }
};
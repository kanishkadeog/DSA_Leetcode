/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const wrapper = function(...args) {
        const key = JSON.stringify(args); // serialize arguments
        if (cache.has(key)) {
            return cache.get(key); // return cached result
        }
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    };

    // attach getCallCount method
    wrapper.getCallCount = function() {
        return callCount;
    };

    return wrapper;
}
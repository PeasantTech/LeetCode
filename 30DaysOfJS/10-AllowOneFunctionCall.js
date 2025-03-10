/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let onceBool = false;

    return function (...args) {
        if (!onceBool) {
            calls = fn(...args);
            onceBool = true;
        }
        else {
            calls = undefined
        };
        return calls;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

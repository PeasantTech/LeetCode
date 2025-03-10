/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memo = {};
    let finArr = [];

    return function (...args) {
        memo = memo || {};
        if (JSON.stringify(args) in memo) {
            return memo[JSON.stringify(args)];
        }
        else {
            return memo[JSON.stringify(args)] = fn(...args);
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

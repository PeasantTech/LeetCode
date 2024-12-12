/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const objectVar = {
    toBe: (objFuncVal) => val === objFuncVal ? true : "Not Equal",
    notToBe: (objFuncVal) => val !== objFuncVal ? true : "Equal"
    }
    return objectVar
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
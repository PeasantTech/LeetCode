/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let hold = n;
    return function() {
        hold += 1;
        if (hold-1 === n) {
            return n;
            } 
        else {
            return hold -1;
            }; 
    
    
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

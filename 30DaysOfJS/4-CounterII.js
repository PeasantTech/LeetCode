/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let holdVal = init;
    return{
        increment: () => {return holdVal+=1},
        decrement: () => {return holdVal-=1},
        reset: () => {return holdVal = init}
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

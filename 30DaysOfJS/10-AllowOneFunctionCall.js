/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {

    return function(...args){
    console.log(args[0]);
        for (let i = 0; i<args.length;i++){
            if (i === 0){ return calls = fn(...args)};
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

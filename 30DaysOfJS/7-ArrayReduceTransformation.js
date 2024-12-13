/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let finResult = init;
    for (let i = 0; i < nums.length; i++){
        finResult = fn(finResult, nums[i]);
    }
    return finResult;
};

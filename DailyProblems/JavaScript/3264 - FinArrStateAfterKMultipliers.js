/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for (let i=1; i <= k; i++){
        const holdIndex = nums.indexOf(Math.min(...nums))
        nums[holdIndex] = Math.min(...nums) * multiplier;
    }
    return nums;
};

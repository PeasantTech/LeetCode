/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const numsSort = nums.sort();
    let pairs = 0;
    let pairNums = nums.length/2;

    for (let i = 0; i < nums.length; i += 2){
        if (nums[i] == nums[i+1]) {
            pairs++;
        }
    }
    return pairs == pairNums ? true : false;
};

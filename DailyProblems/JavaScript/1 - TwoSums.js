/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [];
const target = 0;

var twoSum = function (nums, target) {
    const arrLen = nums.length;
    for (let counter = 0; counter < arrLen; counter++) {
        for (let counter1 = counter+1; counter1 < arrLen; counter1++) {
            const holdVal = nums[counter] + nums[counter1];
            if (holdVal === target) {
                const final = [counter,counter1];
                console.log(final);
                return final;
            }
        }
    }
};

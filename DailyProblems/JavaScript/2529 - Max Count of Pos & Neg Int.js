//2529. Maximum Count of Positive Integer and Negative Integer

/**
 * @param {number[]} nums
 * @return {number}
 */

// Version 1
var maximumCount = function(nums) {
    const numsLen = nums.length;
    let negCount = 0;
    let posCount = 0;
    for (let i = 0; i<numsLen; i++){
        if (nums[i] < 0){
            negCount ++;
        }
        else if (nums[i] > 0){
            posCount ++;
        }
    }
    return negCount > posCount ? negCount : posCount;
    
};

// Version 2
var maximumCount = function(nums) {
    let negCount = 0;
    let posCount = 0;

    nums.forEach((value) => value < 0 ? negCount++ : value > 0 ? posCount++ : null);

    return negCount <= posCount ? posCount : negCount;
    
};


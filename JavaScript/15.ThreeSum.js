/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const holdArr = [];
    const sortedNums = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const numsArrLoop = [sortedNums[i], sortedNums[j], sortedNums[k]];
                const numsArrMath = sortedNums[i] + sortedNums[j] + sortedNums[k];
                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
                console.log("numsArrLoop: " + numsArrLoop);
                console.log("holdArr.length: " + holdArr.length);
                console.log("numsArrMath: " + numsArrMath);
                /*
                numsArrMath === 0 ? console.log(`numsArrMath === 0 : ${numsArrMath} : true`) : console.log(`numsArrMath === 0 : ${numsArrMath} : false`);
                holdArr.length === 0 ? console.log(`holdArr.length === 0 : ${holdArr.length} : true`) : console.log(`holdArr.length === 0 : ${holdArr.length} : false`);
                holdArr.includes(numsArrLoop) ? console.log(`holdArr.includes(numsArrLoop) : true`) : console.log(`holdArr.includes(numsArrLoop): false`);
                */
                if (numsArrMath === 0) {
                    console.log(`numsArrMath === 0 : ${numsArrMath} : true`);
                    if (holdArr.includes(numsArrLoop)) {
                        console.log(`holdArr.includes(numsArrLoop) : true`);
                    } else {
                        console.log(`holdArr.includes(numsArrLoop) : false`);
                    }
                } else {
                    console.log(`numsArrMath === 0 : ${numsArrMath} : false`);
                }

                console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
                numsArrMath === 0 ? () => {
                    holdArr.includes(numsArrLoop) ? null : holdArr[holdArr.length] = numsArrLoop;
                } : null;
            };
        };
    };
    console.log(holdArr);
    return holdArr;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const holdArr = [];
    const sortedNums = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const numsArrLoop = [sortedNums[i], sortedNums[j], sortedNums[k]];
                const numsArrMath = sortedNums[i] + sortedNums[j] + sortedNums[k];
                if (numsArrMath === 0) {
                    if (holdArr.toString().includes(numsArrLoop.toString())) {
                            null;
                    } else {
                        holdArr[holdArr.length] = numsArrLoop;
                    }
                } else {
                    null;
                }
            };
        };
    };
    return holdArr;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const holdArr = [];
    const sortedNums = nums.sort();
    console.log(sortedNums);
    for (let i = 0; i < Math.floor(nums.length / 3); i++) {
        for (let j = i + 1; j < Math.floor(nums.length * (2 / 3)); j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const numsArrLooping = [sortedNums[i], sortedNums[j], sortedNums[k]];
                const numsArrMathed = sortedNums[i] + sortedNums[j] + sortedNums[k];
                if (numsArrMathed === 0) {
                    if (holdArr.toString().includes(numsArrLooping.toString())) {
                        null;
                    } else {
                        holdArr[holdArr.length] = numsArrLooping;
                        console.log(numsArrLooping);
                    }
                }
            }
        }
    };
return holdArr;
};

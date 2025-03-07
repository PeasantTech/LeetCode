/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    let sieveArr = [];
    const singles = [2, 3, 5, 7];
    const primes = [2,3,5,7];
    const nonPrimes = [4,6,8,9];
    let someArr = [];



    for (let i = 0; i+left >= left && i+left <= right; i++) {
        sieveArr[i] = left + i;
        for (let j = 0; j < singles.length; j++) {
            if ((sieveArr[i] % singles[j]) !== 0) {
                someArr = sieveArr.reduce((holdArr, holdVal) => {
                    if (holdVal !== undefined) {
                        holdArr.push(holdVal);
                    }
                    return holdArr;
                }, []);

            }
        }
    }
    console.log(someArr);

    // for (let i = 0; i+left >= left && i+left <= right; i++) {
    //     const holdVal = left + i;
    //     for (let j = 0; j < singles.length; j++) {
            
    //     }
    // }
    // if (left < 10){
    //     for (let j = 0; j < 4; j++) {
    //         sieveArr = sieveArr.reduce((acc, item) => {
    //             if (item == nonPrimes[j]) {
    //                 acc.push(item);
    //             }
    //             return acc;
    //         }, []);
    //     }
    // }

    let distArr = [];
    console.log(sieveArr.length);
    for (let i = 0; i < sieveArr.length-1; i++){
        distArr[i] = sieveArr[i+1] - sieveArr[i];
        console.log(distArr);
    }

    let finArr = [];
    const holdVar = distArr.indexOf(Math.min(...distArr));
    finArr[0] = sieveArr[holdVar];
    finArr[1] = sieveArr[holdVar + 1];



    // for (let i = 0; i < distArr.length; i++){
    //     console.log("loop: ", i, distArr.length);
    //     if (distArr[i] <= distArr[i+1]) {
    //         finArr[0] = sieveArr[i];
    //         finArr[1] = sieveArr[i+1];
    //         console.log(finArr);
    //     } else if (distArr[i+1] === undefined) {
    //         break;
    //     } else if (distArr[i+1] < distArr[i]){
    //         finArr[0] = sieveArr[i+1];
    //         finArr[1] = sieveArr[i+2];
    //         console.log(finArr);
    //     }
    // }

    // for (let i = sieveArr.length; i > 2; i--) {
    // }
    // // console.log(sieveArr, sieveArr.length);
    if (sieveArr.length <= 1){
        finArr = [-1,-1];
    }
    return finArr;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    let sieveArr = [];
    let someArr = [];
    const singles = [2, 3, 5, 7,];
    for (let i = 0; i <= right - left; i++) {
        if (left + i === 1) {
            sieveArr[i] = 0;
        } else {
            sieveArr[i] = left + i;
        }
        console.log(i, sieveArr[i], right-left);
        for (let j = 0; j < 4; j++) {
            if ((sieveArr[i] % singles[j]) == 0) {
                if (sieveArr[i] == 2 || sieveArr[i] == 3 || sieveArr[i] == 5 || sieveArr[i] == 7) {
                    someArr[i] = sieveArr[i];
                    break;
                } else {
                    sieveArr[i] = 0;
                    someArr = sieveArr.reduce((holdArr, holdVal) => {
                        if (holdVal !== 0) {
                            holdArr.push(holdVal);
                        }
                        return holdArr;
                    }, []);
                    // sieveArr[i] = 0;
                }
            }
        }
    }
    console.log(someArr)
    // sieveArr.sort((a, b) => a - b);

    // const removeZero = 0;
    // sieveArr = sieveArr.reduce((acc, item) => {
    //     if (item !== removeZero) {
    //         acc.push(item);
    //     }
    //     return acc;
    // }, []);

    let distArr = [];
    for (let i = 0; i < someArr.length - 1; i++) {
        distArr[i] = someArr[i + 1] - someArr[i];
    }
    console.log(distArr);
    let finArr = [];
    const holdVar = distArr.indexOf(Math.min(...distArr));
    finArr[0] = someArr[holdVar];
    finArr[1] = someArr[holdVar + 1];

    if (someArr.length <= 1) {
        finArr = [-1, -1];
    }
    return finArr;
};

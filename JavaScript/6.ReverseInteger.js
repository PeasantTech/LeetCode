/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    // console.log("x: ", x);
    const intToStr = x.toString();
    let holdInvertInt = "";
    // console.log("intToStr: ", intToStr);
    if (intToStr[0] == "-") {
        holdInvertInt = "-";
        // console.log("first char is neg");
    }

    for (let i = intToStr.length - 1; i >= 0; i--) {
        // console.log(`intToStr[${i}]: ${intToStr[i]}`);
        holdInvertInt += intToStr[i];
        // console.log(holdInvertInt);
    }
    // console.log(holdInvertInt);
    const strToInt = parseInt(holdInvertInt);
    // console.log(strToInt);
    // return strToInt;
    // const lowEnd = (-(2 ** 32));
    // const highEnd = ((2 ** 32)-1);
    // console.log("lowEnd: ", lowEnd);
    // console.log("highEnd: ", highEnd);
    if (-(2 ** 32) <= strToInt && strToInt <= (2 ** 32)-1) {
        // console.log("here");
        return parseInt(holdInvertInt);
    } else {
        // console.log("there");
        return 0;
    }
};

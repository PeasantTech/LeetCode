/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const xStr = x.toString();
    const xStrLen = xStr.length-1;
    for (let i = 0; i <= xStrLen; i++) {
        if (xStr[i] !== xStr[xStrLen-i]) {
            return false;
        }
    }
    return true;
};

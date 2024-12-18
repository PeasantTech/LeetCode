/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let answerPrefix = "";
    for (let index = 0; index < strs[0].length; index++) {
        let whileLoop = 0;
        while (whileLoop <= strs.length) {
            if (strs[whileLoop + 1] === undefined) {
                break;
            } if (strs[whileLoop][index] !== strs[whileLoop + 1][index]) {
                return answerPrefix;
            }
            whileLoop++;
        }
        answerPrefix += strs[whileLoop][index];
    }
    return answerPrefix;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let answerPrefix = "";
    for (let index = 0; index < strs[0].length; index++) {
        let whileLoop = 0;
        while (whileLoop <= strs[0].length) {
            console.log("strs[index]: ", strs[index]);
            console.log("whileLoop: ", whileLoop);
            console.log("strs[j][index]: ", strs[whileLoop][index]);
            if (strs[whileLoop + 1] === undefined) {
                console.log("undefined return");
                break;
            } if (strs[whileLoop][index] !== strs[whileLoop + 1][index]) {
                // console.log("prefix not equal return");
                return answerPrefix;
            }
            whileLoop++;
        }
        answerPrefix += strs[whileLoop][index];
        // console.log("answerPrefix: ", answerPrefix);
    }
    return answerPrefix;
};

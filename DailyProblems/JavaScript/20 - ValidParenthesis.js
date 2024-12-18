/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketArr = {"(":")","{":"}","[":"]"};
    const stringLength = s.length;
    for (let i = 0; i < stringLength; i++){
        let whileLoop = stringLength-1;
        while (whileLoop > i){
            if (bracketArr.map(s[i]) === bracketArs[whileLoop]) {
                console.log("s: ", s);
                break;
            } if (whileLoop === i+1 && s[whileLoop] !== s[i]){
                return false;
            }
            whileLoop--;
        }
    }
    return true;
};

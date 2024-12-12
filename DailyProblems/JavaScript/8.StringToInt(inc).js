/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const strLen = s.length;
    let strToInt = (s[0] = (0||1||2||3||4||5||6||7||8||9) ? s[0] : 0);
    if (s[0] = (0||1||2||3||4||5||6||7||8||9)){
        for (let i=1; i<strLen; i++) {
            s[i] = (0||1||2||3||4||5||6||7||8||9)
            const holdChar = s[i];
            strToInt += holdChar;
        }
    }
    return strToInt;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const arrRomDec = [
        { value: 1, string: "I" },
        { value: 4, string: "IV" },
        { value: 5, string: "V" },
        { value: 9, string: "IX" },
        { value: 10, string: "X" },
        { value: 40, string: "XL" },
        { value: 50, string: "L" },
        { value: 90, string: "XC" },
        { value: 100, string: "C" },
        { value: 400, string: "CD" },
        { value: 500, string: "D" },
        { value: 900, string: "CM" },
        { value: 1000, string: "M" }
    ];

    let finString = "";

    for (let i = 12; i >= 0; i--) {
        const arrRomDecVal = arrRomDec[i].value;
        while (num >= arrRomDecVal) {
            num -= arrRomDecVal;
            finString += arrRomDec[i].string;
        }
    }
    return finString;
};

/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    // const letterByVal = [
    //     { value: 1, string: "a", count: 0 },
    //     { value: 2, string: "b", count: 0 },
    //     { value: 3, string: "c", count: 0 },
    //     { value: 4, string: "d", count: 0 },
    //     { value: 5, string: "e", count: 0 },
    //     { value: 6, string: "f", count: 0 },
    //     { value: 7, string: "g", count: 0 },
    //     { value: 8, string: "h", count: 0 },
    //     { value: 9, string: "i", count: 0 },
    //     { value: 10, string: "j", count: 0 },
    //     { value: 11, string: "k", count: 0 },
    //     { value: 12, string: "l", count: 0 },
    //     { value: 13, string: "m", count: 0 },
    //     { value: 14, string: "n", count: 0 },
    //     { value: 15, string: "o", count: 0 },
    //     { value: 16, string: "p", count: 0 },
    //     { value: 17, string: "q", count: 0 },
    //     { value: 18, string: "r", count: 0 },
    //     { value: 19, string: "s", count: 0 },
    //     { value: 20, string: "t", count: 0 },
    //     { value: 21, string: "u", count: 0 },
    //     { value: 22, string: "v", count: 0 },
    //     { value: 23, string: "w", count: 0 },
    //     { value: 24, string: "x", count: 0 },
    //     { value: 25, string: "y", count: 0 },
    //     { value: 26, string: "z", count: 0 }
    // ];

    const sortedString = s.split("").sort().join("");
    for (let i = 0; i < s.length; i++){
        if (s[i+1] === null){
            i = 0;
            s[i];
        } else {
            s[i] < s[i+1];
        }
    }


};

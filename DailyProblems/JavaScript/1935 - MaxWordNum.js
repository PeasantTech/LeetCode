/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const map = new Map();
    let words = text.split(" ");
    let output = words.length;
    for (let i = 0; i < words.length; i++) {
        console.log("for loop i: ", i, words.length);
        for (let j = 0; j < brokenLetters.length; j++) {
            console.log("for loop j: ", j, brokenLetters.length);
            console.log(words[i],brokenLetters[j], output);
            if (words[i].includes(brokenLetters[j])) {
                output--;
                i++
            }
        }
    }
    return output;
};

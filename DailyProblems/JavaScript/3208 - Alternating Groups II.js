/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
//     let counter = 0;
//     for (let i = 0; i < colors.length; i++) {
//         if (i == 0){
//             if (colors[i + 1] === colors[colors.length - 1]){
//                 counter++;
//             }
//         }
//         else if (i == colors.length - 1) {
//             if (colors[colors.length - 2] === colors[0]) {
//                 counter ++;
//             }
//         }
//         else {
//             if (colors[i+1] === colors[i-1]){
//                 counter++
//             }
//         }
//     }
//     return counter;
// };

    let appendArr = colors;
    appendArr.push(colors[0]); appendArr.unshift(colors[colors.length-1]);
    console.log(colors[0], colors[colors.length-1]);
    console.log(appendArr);
    let counter = 0;
    for (let i = 0; i < colors.length; i++){
        for (let j = 0; colors[j] !== colors[j+1]; j++){
            counter++;
            console.log(counter);
        }
    }
    };

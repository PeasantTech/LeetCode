/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    const sortedArr = arr.sort();
    let chunkArr = [];
    let index = 0;
    let whileLoop = 0;
    while (arr[whileLoop] < arr[whileLoop + 1])
        if (arr[whileLoop] < arr[whileLoop + 1]) {
            chunkArr[index] = [arr[whileLoop]];
            arr[whileLoop].pop();
            index++;
        } else if () {

        }
    if (arr[0] !== undefined) {
        whileLoop = 0;
    }
}
};

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    let holdVal = 0;
    let finVal = 0;

    for(let i = 1; i <= n; i++){
        if (i-1 <= 0){holdVal = 1;}
        finVal = 4*(i-1) + (holdVal);
        holdVal = finVal;
    }
    return finVal;

};

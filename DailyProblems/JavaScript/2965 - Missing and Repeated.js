/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const gridLen = grid.length;
    let gridCC = [];
    let ans = [];
    let gridIt = 0;
    for (let i = 0; i < gridLen; i++) {
        for (let j = 0; j < gridLen; j++) {
            gridCC[gridIt] = grid[i][j];
            gridIt++;
        }
    }
    gridCC = gridCC.sort((a,b)=> a-b);
    for (let i = 0; i < gridCC.length; i++){
        gridCC[i] = parseInt(gridCC[i]);
    }
    console.log(gridCC);
    const gridCCLen = gridCC.length;
    for (let i = 0; i < gridCCLen; i++) {
        console.log("loop: ", i);
        if (gridCC[i] == gridCC[i + 1] && gridCC[i] <= gridCCLen) {
            ans[0] = gridCC[i];
            console.log("in if 1");
        }

        if (gridCC[i] + 1 != gridCC[i + 1] && gridCC[i] != gridCC[i + 1] && gridCC[i] <= gridCCLen && gridCC[i] + 1 <= gridCCLen) {
            ans[1] = gridCC[i] + 1;
            console.log("in if 2");
        }

        if ((gridCC[gridCCLen - 1] != gridCCLen) && (i == gridCCLen - 1)) {
            ans[1] = gridCCLen;
            console.log("in if 3");
        }

        if (gridCC[0] != 1) {
            ans[1] = 1;
            console.log("in if 4");
        }
        console.log(ans);
    }
    return ans;
};

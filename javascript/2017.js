/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let row1Sum = grid[0].reduce((acc, cur) => acc + cur, 0);
    let row2Sum = 0;
    let min = Infinity;
   
    for(let i = 0; i < grid[0].length; i++){
        row1Sum -= grid[0][i];
        min = Math.min(min, Math.max(row1Sum, row2Sum));
        row2Sum += grid[1][i];
    }

    return min;
};

let grid = [[20,3,20,17,2,12,15,17,4,15],[20,10,13,14,15,5,2,3,14,3]];
console.log(gridGame(grid)); // 4
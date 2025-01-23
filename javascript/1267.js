/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    function connected(i, j){
        if(rowHasComputer[i] || colHasComputer[j]){
            return true;
        }
        rowHasComputer[i] = true;
        colHasComputer[j] = true;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for(let d of directions){
            let x = i + d[0];
            let y = j + d[1];
            while(x >= 0 && x < m && y >= 0 && y < n){
                if(grid[x][y] === 1){
                    return true;
                }
                x += d[0];
                y += d[1];
            }
        }
        return false;
    }

    let m = grid.length;
    let n = grid[0].length;
    let totalConectedComputerCount = 0;
    let rowHasComputer = Array(m).fill(false);
    let colHasComputer = Array(n).fill(false);

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                if(connected(i, j)){
                    totalConectedComputerCount++;
                }
            }
        }
    }



    return totalConectedComputerCount;
};

let grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]];
console.log(countServers(grid));
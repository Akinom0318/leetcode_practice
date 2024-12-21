/**
 * @param {number[][]} grid
 * @return {number}
 */

//attempt 1: need to use recusion not loop;
var maxMoves = function(grid) {
    let custom_grid = grid.map(row => [...row].fill(0));
    for (let row = grid.length - 1; row >= 0; row--) {
        for (let col = grid[0].length - 2; col >= 0; col--) {
            const current = grid[row][col];
            let up_right = -Infinity;
            let right = -Infinity;
            let down_right = -Infinity;
            let up_right_method = 0;
            let right_method = 0;
            let down_right_method = 0;
            if (col !== grid[0].length - 1){
                right = grid[row][col + 1];
                if (row !== 0){
                    up_right = grid[row - 1][col + 1];
                }
                if (row !== grid.length - 1){
                    down_right = grid[row + 1][col + 1];
                }
            }

            
            if (current < up_right){
                up_right_method = custom_grid[row - 1][col + 1] + 1;
            }

            if (current < right){
                right_method = custom_grid[row][col + 1] + 1;
            }

            if (current < down_right){
                down_right_method = custom_grid[row + 1][col + 1] + 1;
            }
            custom_grid[row][col] = Math.max(up_right_method, right_method, down_right_method);

        }
        
    }

    let ans = 0;
    custom_grid.forEach((row) => ans = Math.max(ans, row[0]));
    return custom_grid; 
}

//ans:
var maxMoves = function(grid) {
    const m = grid.length; 
    const n = grid[0].length; 
    
    let res = 0;
    let dp = new Array(m).fill(0);
    
    for (let j = 1; j < n; j++) {
        let leftTop = 0;
        let found = false;
        
        for (let i = 0; i < m; i++) {
            let cur = -1;
            let nxtLeftTop = dp[i];
            
            if (i - 1 >= 0 && leftTop !== -1 && grid[i][j] > grid[i - 1][j - 1]) {
                cur = Math.max(cur, leftTop + 1);
            }
            
            if (dp[i] !== -1 && grid[i][j] > grid[i][j - 1]) {
                cur = Math.max(cur, dp[i] + 1);
            }
            
            if (i + 1 < m && dp[i + 1] !== -1 && grid[i][j] > grid[i + 1][j - 1]) {
                cur = Math.max(cur, dp[i + 1] + 1);
            }
            
            dp[i] = cur;
            found = found || (dp[i] !== -1);
            leftTop = nxtLeftTop;
        }
        
        if (!found) break;
        res = j;
    }
    
    return res;
};

let grid = [[65,200,263,220,91,183,2,187,175,61,225,120,39],[111,242,294,31,241,90,145,25,262,214,145,71,294],[152,25,240,69,279,238,222,9,137,277,8,143,143],[189,31,86,250,20,63,188,209,75,22,127,272,110],[122,94,298,25,90,169,68,3,208,274,202,135,275],[205,20,171,90,70,272,280,138,142,151,80,122,130],[284,272,271,269,265,134,185,243,247,50,283,20,232],[266,236,265,234,249,62,98,130,122,226,285,168,204],[231,24,256,101,142,28,268,82,111,63,115,13,144],[277,277,31,144,49,132,28,138,133,29,286,45,93],[163,96,25,9,3,159,148,59,25,81,233,127,12],[127,38,31,209,300,256,15,43,74,64,73,141,200]];
console.log(maxMoves(grid));
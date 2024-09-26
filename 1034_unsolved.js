/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
    let ori = grid[row][col];
    let pass = [];
    
    for (let i = 0; i < grid.length; i++) {
        pass[i] = [];
        for (let j = 0; j < grid[0].length; j++) {
            pass[i][j] = 0;
        }
    }

    pass[row][col] = -1;

    function dfs(g,r,c,color,ori,pass){
        if(c + 1 < g[0].length && g[r][c + 1] !== color && g[r][c + 1] === ori && pass[r][c + 1] !== -1){
            g[r][c + 1] = color;
            pass[r][c + 1] = -1;
            dfs(g,r,c + 1,color,ori,pass);
        }
        if(c - 1 >= 0 && g[r][c - 1] !== color && g[r][c - 1] === ori && pass[r][c - 1] !== -1){
            g[r][c - 1] = color;
            pass[r][c - 1] = -1;
            dfs(g,r,c - 1,color,ori,pass);
        }
        if(r + 1 < g.length && g[r + 1][c] !== color && g[r + 1][c] === ori && pass[r + 1][c] !== -1){
            g[r + 1][c] = color;
            pass[r + 1][c] = -1;
            dfs(g,r + 1,c,color,ori,pass);
        }
        if(r - 1 >= 0 && g[r - 1][c] !== color && g[r - 1][c] === ori && pass[r - 1][c] !== -1){
            g[r - 1][c] = color;
            pass[r - 1][c] = -1;
            dfs(g,r - 1,c - 1,color,ori,pass);
        }

        if(r === 0 || c === 0 || r === grid.length - 1 || c === grid[0].length){
            g[r][c] = color;
        }

        return g;
    }

    return dfs(grid,row,col,color,ori,pass);
};

grid = [[1,1,1],[1,1,1],[1,1,1]];
row = 1;
col = 1;
color = 2;
console.log(colorBorder(grid,row,col,color));
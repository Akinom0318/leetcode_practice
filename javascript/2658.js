/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    let visited = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let maxFish = 0;
    let dfs = (i, j) => {
        visited[i][j] = true;
        let fish = grid[i][j];
        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] > 0 && !visited[x][y]) {
                fish += dfs(x, y);
            }
        }
        return fish;
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0 && !visited[i][j]) {
                maxFish = Math.max(maxFish, dfs(i, j));
            }
        }
    }

    return maxFish;
};

let grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]];
console.log(findMaxFish(grid)); // 17
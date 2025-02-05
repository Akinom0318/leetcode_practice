/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(-1));
    let inZero = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));
    let islandTag = 0;
    let islands = {};
    let zeroPositions = [];

    function dfs(i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || visited[i][j] !== -1) {
            return 0;
        }

        visited[i][j] = islandTag;

        if(grid[i][j] === 0 && !inZero[i][j]) {
            zeroPositions.push([i, j]);
            inZero[i][j] = true;
            return 0;
        }

        let count = 1;
        for (const [dx, dy] of directions) {
            count += dfs(i + dx, j + dy);
        }
        return count;
    }

    let maxSize = -Infinity;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (visited[i][j] === -1 && grid[i][j] === 1) {
                let size = dfs(i, j);
                islands[islandTag] = size;
                maxSize = Math.max(maxSize, size);
                islandTag++;
            }
        }
    }
    


    if(islandTag === 0) {
        return 1;
    }

    //console.log(zeroPositions);

    while(zeroPositions.length > 0) {
        let [i, j] = zeroPositions.pop();
        let adjIslands = [];
        for(const [x, y] of directions) {
            let ni = i + x;
            let nj = j + y;
            if(ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[0].length && grid[ni][nj] === 1) {
                let tag = visited[ni][nj];
                if(!adjIslands.includes(tag)) {
                    adjIslands.push(tag);
                }
            }
        }
        if(adjIslands.length < 1){
            break;
        }
        if(adjIslands.length === 1) {
            maxSize = Math.max(maxSize, islands[adjIslands[0]] + 1);
            continue;
        }
        let tmpMax = adjIslands.reduce((acc, cur) => acc + islands[cur], 0) + 1;
        maxSize = Math.max(maxSize, tmpMax);
    }

    return maxSize;
};

let grid = [[0,0,0,0,0,0,0],
            [0,1,1,1,1,0,0],
            [0,1,0,0,1,0,0],
            [1,0,1,0,1,0,0],
            [0,1,0,0,1,0,0],
            [0,1,0,0,1,0,0],
            [0,1,1,1,1,0,0]];

let grid1 = [[0,0],
             [0,0]];
console.log(largestIsland(grid));
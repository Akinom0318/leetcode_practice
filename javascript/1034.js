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

function showGrid (grid){
    for (const row of grid){
        for (const color of row){
            process.stdout.write(`${color} `);
        }
        console.log('\n');
    }
}

//what so ever
function getNeighbors(grid, row, column) {
	const totalRows = grid.length;
	const totalColumns = grid[0].length;
	const neighbors = [];
	if (row > 0) {
		neighbors.push({ rowIndex: row - 1, columnIndex: column });
	}
	if (row < totalRows - 1) {
		neighbors.push({ rowIndex: row + 1, columnIndex: column });
	}

	if (column > 0) {
		neighbors.push({ rowIndex: row, columnIndex: column - 1 });
	}

	if (column < totalColumns - 1) {
		neighbors.push({ rowIndex: row, columnIndex: column + 1 });
	}

	return neighbors;
}

function colorTheComponent(grid, row, col, foundColor, color = -1, explored = {}) {
	const neighbors = getNeighbors(grid, row, col);
	for (const { rowIndex, columnIndex } of neighbors) {
		const key = `${rowIndex}_${columnIndex}`;
		if (!explored[key] && grid[rowIndex][columnIndex] === foundColor) {
			explored[key] = true;
			grid[rowIndex][columnIndex] = color;
			colorTheComponent(grid, rowIndex, columnIndex, foundColor, color, explored);
		}
	}
}

function isBoundary(grid, rowIndex, columnIndex) {
	const response =
		grid[rowIndex - 1] &&
		grid[rowIndex - 1][columnIndex] === -1 &&
		grid[rowIndex + 1] &&
		grid[rowIndex + 1][columnIndex] === -1 &&
		grid[rowIndex] &&
		grid[rowIndex][columnIndex - 1] === -1 &&
		grid[rowIndex][columnIndex + 1] === -1
			? true
			: false;
	return response;
}

var colorBorder = function(grid, row, col, color) {
	const foundColor = grid[row][col];
	grid[row][col] = -1;
	const notInBoundary = [];
	colorTheComponent(grid, row, col, foundColor);
	for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
			if (grid[rowIndex][columnIndex] === -1) {
				if (isBoundary(grid, rowIndex, columnIndex)) {
					notInBoundary.push({ rowIndex, columnIndex });
				}
			}
		}
	}

	for (const { rowIndex, columnIndex } of notInBoundary) {
		grid[rowIndex][columnIndex] = foundColor;
	}

	for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
		for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex++) {
			if (grid[rowIndex][columnIndex] === -1) {
				grid[rowIndex][columnIndex] = color;
			}
		}
	}
	return grid;
};

let grid = [[2,2,2,3,3],[2,3,3,1,2],[2,1,3,2,1]];
let row = 1;
let col = 4;
let color = 1;
showGrid(grid);
console.log(colorBorder(grid,row,col,color));
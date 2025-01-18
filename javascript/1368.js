/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Direction vectors: right, left, down, up (matching grid values 1,2,3,4)
    const dirs = [
        [0, 1],   // Right
        [0, -1],  // Left
        [1, 0],   // Down
        [-1, 0]   // Up
    ];

    // Min-heap for (cost, row, col), implemented as an array
    const pq = [[0, 0, 0]]; // Initial cost is 0, starting at (0, 0)
    const minCost = Array.from({ length: numRows }, () => Array(numCols).fill(Infinity));
    minCost[0][0] = 0;

    while (pq.length > 0) {
        // Extract the cell with the smallest cost
        pq.sort((a, b) => a[0] - b[0]); // Sort the heap by cost
        const [cost, row, col] = pq.shift();

        // Skip if we have already found a better path to this cell
        if (minCost[row][col] !== cost) {
            continue;
        }

        // Explore all four directions
        for (let d = 0; d < dirs.length; d++) {
            const [dx, dy] = dirs[d];
            const newRow = row + dx;
            const newCol = col + dy;

            // Check if the new position is valid
            if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
                // Calculate the new cost (add 1 if the direction changes)
                const newCost = cost + (d !== (grid[row][col] - 1));

                // Update if a better path is found
                if (newCost < minCost[newRow][newCol]) {
                    minCost[newRow][newCol] = newCost;
                    pq.push([newCost, newRow, newCol]);
                }
            }
        }
    }

    return minCost[numRows - 1][numCols - 1];
};


let grid = [[2,2,2],[2,2,2],[2,2,2]];
console.log(minCost(grid)); // 0
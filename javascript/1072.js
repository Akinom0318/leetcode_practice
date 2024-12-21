/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
        // Object to store the frequency of each pattern
        const patternFrequency = {};

        for (const currentRow of matrix) {
            // Convert the row into a pattern string
            const rowPattern = currentRow
                .map(num => (num === currentRow[0] ? "T" : "F"))
                .join("");

            // Update the frequency of the pattern
            patternFrequency[rowPattern] = 
                (patternFrequency[rowPattern] || 0) + 1;
        }
        console.log(patternFrequency);
        // Return the maximum frequency
        return Math.max(...Object.values(patternFrequency), 0);
}

let matrix = [[0,0,0],[0,0,1],[1,1,0]];
console.log(maxEqualRowsAfterFlips(matrix)); // 1
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum = 0;
    let negativeCount = 0;
    let min = Infinity;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += Math.abs(matrix[i][j]);
            if (matrix[i][j] < 0) {
                negativeCount++;
            }
            min = Math.min(min, Math.abs(matrix[i][j]));
        }
    }


    if (negativeCount % 2 === 0) {
        return sum;
    } else {
        return sum -  min * 2;
    }
};

let matrix = [[1,2,3],[-1,-2,-3],[1,2,3]];
console.log(maxMatrixSum(matrix));
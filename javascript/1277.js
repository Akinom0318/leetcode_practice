/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let total = 0;

    for (let row = 1; row < matrix.length; row ++){
        for (let column = 1; column < matrix[0].length; column ++){
            let element = matrix[row][column];
            if(element === 0){
                continue;
            }
            let left = matrix[row][column - 1];
            let up = matrix[row - 1][column];
            let left_up = matrix[row - 1][column - 1];
            //console.log(row, column, matrix[row][column], Math.min(left, up, left_up) + 1)
            matrix[row][column] = Math.min(left, up, left_up) + 1;
        }
    }

    matrix.forEach(row => {
        row.forEach((element) => total += element);
    });

    //console.log(matrix.filter((row) => row.filter((element) => element > 2)));

    return total;
};

let matrix = [[1,0,1],[1,1,0],[1,1,0]];
console.log(countSquares(matrix));
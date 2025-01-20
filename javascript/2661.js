/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let colMap = new Map();
    let rowMap = new Map();
    let row = mat.length;
    let col = mat[0].length;
    let position = new Map();

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            colMap.set(j, colMap.get(j) + 1 || 1);
            rowMap.set(i, rowMap.get(i) + 1 || 1);
            position.set(mat[i][j], [i, j]);
        }
    }

    let count = 0;
    for(const num of arr){
        let [i, j] = position.get(num);
        rowMap.set(i, rowMap.get(i) - 1);
        colMap.set(j, colMap.get(j) - 1);
        if(rowMap.get(i) === 0 || colMap.get(j) === 0){
            return count;
        }
        count++;
    }
};

let arr = [1,3,4,2];
let mat = [[1,4],[2,3]];
console.log(firstCompleteIndex(arr, mat)); // 0
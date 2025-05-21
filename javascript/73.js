/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    let isFirstRowZero = false;
    let isFirstColZero = false;

    for(let i = 0; i < n; i ++){
        for(let j = 0; j < m; j ++){
            if(matrix[i][j] === 0){
                if(i === 0){
                    isFirstRowZero = true;
                }
                if(j === 0){
                    isFirstColZero = true;
                }

                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }


    for(let i = 1; i < n; i ++){
        if(matrix[i][0] === 0){
            for (let j = 0; j < m; j ++){
                matrix[i][j] = 0;
            }
        }
    }

    for(let j = 1; j < m; j ++){
        if(matrix[0][j] === 0){
            for (let i = 0; i < n; i ++){
                matrix[i][j] = 0;
            }
        }
    }


    if(isFirstColZero){
        for(let i = 0; i < n; i ++){
                matrix[i][0] = 0;
        }
    }

    if(isFirstRowZero){
        for(let j = 0; j < m; j ++){
                matrix[0][j] = 0;
        }
    }

    //console.log(matrix);
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));
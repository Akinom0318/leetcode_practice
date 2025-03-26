/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let oneDArray = [];

    grid.forEach((row) => {
        row.forEach((element) => {
            oneDArray.push(element);
        });
    });

    if(oneDArray.length === 1){
        return 0;
    }

    oneDArray = oneDArray.sort((a, b) => a - b);

    let median = oneDArray[Math.floor(oneDArray.length / 2)];


    let count = 0;
    for(const element of oneDArray){
        let val = Math.abs(median - element) % x === 0 ? Math.abs(median - element) / x : -1;
        if(val === -1){
            return -1;
        }

        count += val;
    }

    return count;
};

let grid = [[529,529,989],[989,529,345],[989,805,69]];
let x = 92;
console.log(minOperations(grid, x));
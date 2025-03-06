/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = Math.pow(grid.length, 2);
    let total = n * (n + 1) / 2;
    let result = [0, 0];
    let set = new Set();
    for(const row of grid){
        for(const num of row){
            if(set.has(num)){
                result[0] = num;
            } else {
                set.add(num);
                total -= num;
            }
        }
    }
    result[1] = total;

    return result;
};

let nums = [[1,3],[2,2]];
console.log(findMissingAndRepeatedValues(nums));
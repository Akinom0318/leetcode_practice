/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let curr_sum = 0;
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        curr_sum += arr[i];
        if (curr_sum === i * (i + 1) / 2) {
            result++;
        }
    }
    return result;
};
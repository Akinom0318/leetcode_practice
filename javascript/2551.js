/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    let partition = new Array(weights.length - 1).fill(0);

    for(let i = 0; i < weights.length - 1; i ++){
        partition[i] = weights[i] + weights[i + 1];
    }

    partition = partition.sort((a, b) => a - b);

    let maxSum = 0;
    let minSum = 0;
    for(let i = 0; i < k - 1; i ++){
        maxSum += partition[i];
        minSum += partition[partition.length - 1 - i];
    }


    return Math.abs(maxSum - minSum);
};

let weights = [1,3,5,1];
let k = 2;
console.log(putMarbles(weights, k));
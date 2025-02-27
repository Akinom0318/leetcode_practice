/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let n = arr.length;
    let maxLen = 0;
    let dp = Array.from({ length: n }, () => Array(n).fill(0));

    let valToIdx = new Map();
    for (let i = 0; i < n; i++) {
        valToIdx.set(arr[i], i);
    }

    for (let curr = 0; curr < n; curr++) {
        for (let prev = 0; prev < curr; prev++) {
            let diff = arr[curr] - arr[prev];
            let prevIdx = valToIdx.has(diff) ? valToIdx.get(diff) : -1;


            dp[prev][curr] = (diff < arr[prev] && prevIdx >= 0) ? dp[prevIdx][prev] + 1 : 2;
            maxLen = Math.max(maxLen, dp[prev][curr]);
        }
    }

    return maxLen > 2 ? maxLen : 0;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(lenLongestFibSubseq(arr)); // Output: 5
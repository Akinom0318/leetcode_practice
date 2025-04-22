/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
    let dp = Array.from({ length: maxValue }, () => Array(n).fill(0));
    let mod = 1e9 + 7;

    for (let i = 0; i < maxValue; i++) {
        dp[i][0] = 1;
    }

    for (let len = 1; len < n; len++) {
        for (let num = 1; num <= maxValue; num++) {
            for (let factor = 1; factor * factor <= num; factor++) {
                if (num % factor === 0) {
                    dp[num][len] = (dp[num][len] + dp[factor][len-1]) % mod;
                    if (factor !== num / factor) {
                        dp[num][len] = (dp[num][len] + dp[num / factor][len-1]) % mod;
                    }
                }
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < maxValue; i++) {
        ans = (ans + dp[i][n-1]) % mod;
    }

    return ans;
};

let n = 5;
let maxValue = 3;
console.log(idealArrays(n, maxValue)); // Output: 10
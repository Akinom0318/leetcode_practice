/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = Array.from({length: numRows}, (_, i) => new Array(i + 1).fill(0));

    dp[0][0] = 1;
    for (let i = 0; i < numRows - 1; i ++){
        for (let j = 0; j <= i; j ++){
            dp[i + 1][j] += dp[i][j];
            dp[i + 1][j + 1] += dp[i][j];
        }
    }

    return dp;
};

let numRows = 5;
console.log(generate(numRows));
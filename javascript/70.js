/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for(let i = 1; i <= n; i++){
        dp[i] += dp[i - 1];
        if(i >= 2){
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
};

console.log(climbStairs(3));
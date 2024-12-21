/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let dp = new Array(s.length + 1).fill(0);

    for(let i = 1; i < s.length + 1; i++) {
        dp[i] = dp[i - 1] + 1;

        for(let j = 0; j < i; j ++){
            const prefix = s.slice(j, i);
            if(dictionary.includes(prefix)){
                dp[i] = Math.min(dp[i],dp[j]);
            }
        }

    }
    return dp[dp.length - 1];
};


let s = "leetscode";
let dictionary = ["leet", "code", "leetcode"];

console.log(minExtraChar(s,dictionary));
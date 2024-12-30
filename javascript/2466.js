/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let modulo = 1000000007;
    let dp = new Array(high + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= high; i++) {
        if(i >= zero){
            dp[i] = (dp[i] + dp[i - zero]) % modulo;
        }
        if(i >= one){
            dp[i] = (dp[i] + dp[i - one]) % modulo;
        }
    }

    let res = 0;
    for (let i = low; i <= high; i++) {
        res = (res + dp[i]) % modulo;
    }

    return res;
};

let low = 3;
let high = 3;
let zero = 1;
let one = 1;
console.log(countGoodStrings(low, high, zero, one));

/*

1
00 11 
001 100 111

*/

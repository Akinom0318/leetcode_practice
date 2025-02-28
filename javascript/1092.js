/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    let dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
    function LCS(str1, str2) {
        for (let i = 1; i <= str1.length; i++) {
            for (let j = 1; j <= str2.length; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp;
    }

    let dpLCS = LCS(str1, str2);

    let i = str1.length, j = str2.length;
    let result = "";
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            result = str1[i - 1] + result;
            i--;
            j--;
        } else if (dpLCS[i - 1][j] > dpLCS[i][j - 1]) {
            result = str1[i - 1] + result;
            i--;
        } else {
            result = str2[j - 1] + result;
            j--;
        }
    }

    while (i > 0) {
        result = str1[i - 1] + result;
        i--;
    }

    while (j > 0) {
        result = str2[j - 1] + result;
        j--;
    }

    return result;

};

let str1 = "abac", str2 = "cab";
console.log(shortestCommonSupersequence(str1, str2)); // Output: 5
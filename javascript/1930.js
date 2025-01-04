/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let palindrom = new Set();
    let n = s.length;
    let res = 0;
    for(let i = 0 ; i < n; i++){
        if(palindrom.has(s[i])) continue;
        palindrom.add(s[i]);
        for(let j = n - 1; j > i; j--){
            if(s[i] === s[j]){
                let sub = new Set();
                for(let k = i + 1; k < j; k++){
                    sub.add(s[k]);
                }
                res += sub.size;
                break;
            }
        }
    }
    return res;
};

let s = "bbcbaba";
console.log(countPalindromicSubsequence(s)); // 4
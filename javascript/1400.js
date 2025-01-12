/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if(s.length < k) return false;
    let freq = new Map();
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    let odd = 0;
    for (let count of freq.values()) {
        if (count % 2 === 1) {
            odd++;
        }
    }

    return odd <= k;
};

let s = "abappapp";
let k = 3;
console.log(canConstruct(s, k)); // true
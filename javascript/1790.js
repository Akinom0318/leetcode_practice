/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let hash1 = {};
    let hash2 = {};
    for (let i = 0; i < s1.length; i++) {
        hash1[s1[i]] = (hash1[s1[i]] || 0) + 1;
        hash2[s2[i]] = (hash2[s2[i]] || 0) + 1;
    }
    for (let key in hash1) {
        if (hash1[key] !== hash2[key]) {
            return false;
        }
    }
    let diffs = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffs++;
        }
        if(diffs > 2) {
            return false;
        }
    }
    return diffs === 0 || diffs === 2;
};

let s1 = "caa";
let s2 = "aaz";
console.log(areAlmostEqual(s1, s2)); // false
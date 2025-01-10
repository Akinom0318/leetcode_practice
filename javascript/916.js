/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const maxFreq = new Array(26).fill(0);
    for (const word of words2) {
        const freq = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }

    const res = [];
    for (const word of words1) {
        const freq = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let isValid = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            res.push(word);
        }
    }

    return res;
};

let words1 = ["amazon","apple","facebook","google","leetcode"];
let words2 = ["lo","eo"];

console.log(wordSubsets(words1, words2)); // ["facebook","google","leetcode"]
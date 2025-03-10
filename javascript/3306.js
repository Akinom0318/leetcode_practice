/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {


    function atLeastK(word, k) {
        let numValidSubstrings = 0;
        let start = 0, end = 0;
        let vowelCount = new Map();
        let consonantCount = 0;

        while (end < word.length) {
            let newLetter = word[end];

            if (isVowel(newLetter)) {
                vowelCount.set(newLetter, (vowelCount.get(newLetter) || 0) + 1);
            } else {
                consonantCount++;
            }

            while (vowelCount.size === 5 && consonantCount >= k) {
                numValidSubstrings += word.length - end;
                let startLetter = word[start];

                if (isVowel(startLetter)) {
                    vowelCount.set(startLetter, vowelCount.get(startLetter) - 1);
                    if (vowelCount.get(startLetter) === 0) {
                        vowelCount.delete(startLetter);
                    }
                } else {
                    consonantCount--;
                }
                start++;
            }

            end++;
        }

        return numValidSubstrings;
    }

    function isVowel(c) {
        return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
    }

    function countOfSubstrings(word, k) {
        return atLeastK(word, k) - atLeastK(word, k + 1);
    }

    return countOfSubstrings(word, k);
};

let word = "aeeieoua";
let k = 0;
console.log(countOfSubstrings(word, k));
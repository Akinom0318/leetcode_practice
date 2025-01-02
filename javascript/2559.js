/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    function startNEndwithVowel(word) {
        return vowels.includes(word[0]) && vowels.includes(word[word.length - 1]);
    }
    let validCount = new Array(words.length).fill(0);

    validCount[0] = startNEndwithVowel(words[0]) ? 1 : 0;
    for(let i = 1; i < words.length; i++) {
        if(startNEndwithVowel(words[i])) {
            validCount[i] = validCount[i - 1] + 1;
        }else {
            validCount[i] = validCount[i - 1];
        }
    }

    //console.log(validCount);
    let result = [];
    for(const [left, right] of queries) {
        let count = validCount[right] - validCount[left] + (startNEndwithVowel(words[left]) ? 1 : 0);
        result.push(count);
    }

    return result;
};

let words = ["aba","bcb","ece","aa","e"];
let queries = [[0,2],[1,4],[1,1]];
console.log(vowelStrings(words, queries)); // [2,3,0]
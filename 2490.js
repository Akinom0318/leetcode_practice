/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    sentence = sentence.split(' ');
    //console.log(sentence.length, sentence);
    if (sentence.length <= 1){
        if(sentence[0][0] === sentence[0][sentence[0].length - 1]){
            return true;
        }
        return false;
    }
    let prev = sentence[0].charAt(0);
    for (const word of sentence){
        if (prev !== word[0]){
            return false;
        }
        prev = word[word.length - 1];
    }
    if (sentence[0][0] !== sentence[sentence.length - 1][sentence[sentence.length - 1].length - 1]){
        return false;
    }
    return true;
};
let sentence = "leetcode exercises sound delightful";
console.log(isCircularSentence(sentence))
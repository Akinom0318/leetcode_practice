/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(' ');
    let count = 1;
    for (const word of sentence){
        if(word.includes(searchWord) && word.indexOf(searchWord) === 0){
            return count;
        }
        count++;
    }

    return -1;
};
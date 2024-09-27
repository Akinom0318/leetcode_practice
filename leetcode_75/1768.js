/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let index_1 = 0;
    let index_2 = 0;
    let result = "";

    while(index_1 !== word1.length || index_2 !== word2.length){
        if(index_1 !== word1.length){
            result += word1[index_1];
            index_1 ++;
        }
        if(index_2 !== word2.length){
            result += word2[index_2];
            index_2 ++;
        }
    }

    return result;
}
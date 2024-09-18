/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1 + " " + s2;
    const words = s1.split(' ');
    const result = [];
    const Hash_T = {};

    for(const word of words){
        Hash_T[word] = (Hash_T[word] || 0) + 1;
    }

    for(const word in Hash_T){
        if(Hash_T[word] === 1){
            result.push(word);
        }
    }

    return result;
};

s1 = "apple apple", s2 = "banana"
console.log(uncommonFromSentences(s1,s2));
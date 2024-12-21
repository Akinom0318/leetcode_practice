/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    let refined_words = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word !== ''){
            refined_words.push(word);
        }
    }

    return refined_words.reverse().join(' ');
};

let s = "a good   example";
console.log(reverseWords(s));
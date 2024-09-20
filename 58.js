/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(' ');
    s.unshift('');
    let result = Array.from(new Set(s));
    

    return result[result.length - 1].length;

};

let str = "fly me   to   the moon  ";

console.log(lengthOfLastWord(str));
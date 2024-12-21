/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let allow_count = 0;
    for(const word of words){
        let flag = false;
        for(const c of word){
            if(allowed.indexOf(c) === -1){
                flag = true;
            }
            if(flag){
                allow_count --;
                break;
            }        
        }
        allow_count ++;
    }
    return allow_count;
};

allowed = "abc";
words = ["a","b","c","ab","ac","bc","abc"];

console.log(countConsistentStrings(allowed,words))
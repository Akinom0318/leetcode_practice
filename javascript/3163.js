/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let current_c = '';
    let count = 0;
    let compressed = "";
    for (const c of word){
        if (count > 8){
            compressed += count;
            compressed += current_c;         
            current_c = c;
            count = 0;
        }
        if (c !== current_c){
            if (current_c){
                compressed += count;
                compressed += current_c;                
            }
            current_c = c;
            count = 0;
        }
        count ++;
    }

    return compressed + count + current_c;
};

let word = "abcde";
console.log(compressedString(word));
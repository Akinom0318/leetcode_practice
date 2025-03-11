/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let hash = new Map();

    let left = 0;
    let right = 0;
    let result = 0;

    while(right < s.length){
        let end_char = s[right];
        hash.set(end_char, (hash.get(end_char) || 0) + 1);
        while(hash.size === 3){
            result += s.length - right;
            let start_char = s[left];
            if(hash.get(start_char) === 1){
                hash.delete(start_char);
            }else{
                hash.set(start_char, hash.get(start_char) - 1);
            }

            left ++;
        }
        right ++;
    }

    return result;
};

let s = "abcabc";
console.log(numberOfSubstrings(s));
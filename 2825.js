/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    if (str2.length > str1.length){
        return false;
    }

    let str1_pointer = 0;
    let str2_pointer = 0;

    while (str1_pointer < str1.length && str2_pointer < str2.length){
        if (str1[str1_pointer] === str2[str2_pointer]){
            str2_pointer++;
        }
        let ascii_code = str2.charCodeAt(str2_pointer) - 1 === 96 ? 122 : str2.charCodeAt(str2_pointer) - 1;
        let chr = String.fromCharCode(ascii_code);
        if (str1[str1_pointer] === chr){
            str2_pointer++;
        }
        str1_pointer++;
    }

    return str2_pointer === str2.length ? true : false;
};

console.log(canMakeSubsequence("ff", "fg")); // true
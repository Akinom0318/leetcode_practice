/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointer_1 = 0;
    let pointer_2 = 0;
    if (s.length < 1){
        return true;
    }


    while(pointer_2 < t.length){
        if(s[pointer_1] === t[pointer_2]){
            pointer_1 ++;
            if(pointer_1 === s.length){
                return true;
            }
        }
        pointer_2 ++;
    }
    return false;
};
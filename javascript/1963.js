/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let result = 0;
    for(const c of s){
        if(c === '['){
            result ++;
        }else if (result > 0){
            result --;
        }
    }

    return Math.floor((result + 1) / 2);
};

let s = "[]";

console.log(minSwaps(s));
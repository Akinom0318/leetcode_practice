/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let pointer = 1;
    let n = s.length;
    let left = s[0] === "0" ? 1 : 0;
    let right = s.split("").filter((c) => c === "1").length;
    right = right - (s[0] === "1" ? 1 : 0);
    let max = left + right;
    while(pointer < n - 1){
        if(s[pointer] === "0"){
            left++;
        }else{
            right--;
        }
        max = Math.max(max, left + right);
        pointer++;
    }
    return max;
};

let s = "1111";
console.log(maxScore(s));
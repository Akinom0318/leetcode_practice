/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let shiftCount = new Array(s.length).fill(0);

    for(const [start, end, direction] of shifts){
        if(direction === 1){
            shiftCount[start] += 1;
            if(end + 1 < s.length){
                shiftCount[end + 1] -= 1;
            }
        }else{
            shiftCount[start] -= 1;
            if(end + 1 < s.length){
                shiftCount[end + 1] += 1;
            }
        }
    }

    let res = "";
    let shift = 0;
    for(let i = 0; i < s.length; i++){
        shift = (shift + shiftCount[i]) % 26;
        if(shift < 0){
            shift += 26;
        }
        res += String.fromCharCode((s.charCodeAt(i) - 97 + shift) % 26 + 97);
    }
    return res;
};

let s = "abc";
let shifts = [[0,1,0],[1,2,1],[0,2,1]];
console.log(shiftingLetters(s, shifts)); // "bca"
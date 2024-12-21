/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let result = new Array(code.length).fill(0);
    let n = code.length;
    if (k === 0) {
        return result;
    }
    if (k < 0) {
        code = code.reverse();
    }
    //console.log(code);
    for (let index = 0; index < code.length; index++) {
        let tmp_index = index;
        let tmp_count = Math.abs(k);
        while (tmp_count > 0) {
            tmp_index = (tmp_index + 1) % n;
            result[index] += code[tmp_index];
            tmp_count--;
            //console.log(tmp_count)
        }
        
    }

    return k < 0 ? result.reverse() : result;
};

let code = [2,4,9,3];
let k = -2;
console.log(decrypt(code, k)); // [12,5,6,13]
/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let s0 = ['0'];

    for (let seq = 1; seq < n; seq++) {
        let invert_s0 = [...s0];
        for (let i = 0; i < invert_s0.length; i++) {
            if(invert_s0[i] === '0'){
                invert_s0[i] = '1';
            }else{
                invert_s0[i] = '0';
            }
        }
        let reversed_s0 = invert_s0.reverse();
        s0.push('1');
        reversed_s0.forEach((item) => s0.push(item));
    }

    return s0.join('').charAt(k - 1);
};

let n = 4;
let k = 11;

console.log(findKthBit(n, k));
console.log('011100110110001');
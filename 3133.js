/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let count = 1;

    function calbit(n){
        let ones = n.toString(2).split('0').join('').length;

        return ones;
    }

    let current0s = x.toString(2).length - calbit(x);

    return current0s;
};


// solution:
var minEnd = function(n, x) {
    let result = BigInt(x);
    let remaining = BigInt(n - 1);
    let position = 1n;
    
    while (remaining > 0n) {
        if ((BigInt(x) & position) === 0n) {
            result |= (remaining & 1n) * position;
            remaining >>= 1n;
        }
        position <<= 1n;
    }
    
    return Number(result);
};
let n = 3;
let x = 4;

console.log(minEnd(n, x));
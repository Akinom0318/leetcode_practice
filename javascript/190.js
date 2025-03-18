/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;
    let bitCount = 32;
    while(n !== 0){
        result = (result << 1) | (n & 1);
        n >>>= 1;
        bitCount --;
    }

    while(bitCount > 0){
        result = result << 1;
        bitCount --;
    }

    return result >>> 0;
};

console.log(reverseBits(13))

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    function decimalToTernary(n) {
        while (n > 0) {
            if(n % 3 === 2) {
                return false;
            }
            n = Math.floor(n / 3);
        }
        return true;
    }


    return decimalToTernary(n);
};


let n = 91;
console.log(checkPowersOfThree(n)); // true
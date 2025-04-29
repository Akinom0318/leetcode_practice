/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    const mod = 1000000007n;

    // use fast exponentiation to calculate x^y % mod
    function quickmul(x, y) {
        let ret = 1n;
        let mul = x;
        while (y > 0) {
            if (y % 2n === 1n) {
                ret = (ret * mul) % mod;
            }
            mul = (mul * mul) % mod;
            y = y / 2n;
        }
        return ret;
    }

    return Number(
        (quickmul(5n, BigInt(n + 1) / 2n) * quickmul(4n, BigInt(n) / 2n)) % mod,
    );
};

let n = 1;
console.log(countGoodNumbers(n)); // 400
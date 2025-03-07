/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    let result = [-1, -1];
    let minDiff = Infinity;
    let primes = sieveOfEratosthenes(right);

    //console.log(primes);

    for (let i = 0; i < primes.length; i++) {
        if (primes[i] >= left && primes[i] <= right && primes[i - 1] >= left && primes[i - 1] <= right) {
            if (i > 0 && primes[i] - primes[i - 1] < minDiff) {
                minDiff = primes[i] - primes[i - 1];
                result[0] = primes[i - 1];
                result[1] = primes[i];
            }
        }
    }

    function sieveOfEratosthenes(n) {
        let primes = new Array(n + 1).fill(true);
        primes[0] = primes[1] = false;
    
        for (let p = 2; p * p <= n; p++) {
            if (primes[p]) {
                for (let i = p * p; i <= n; i += p) {
                    primes[i] = false;
                }
            }
        }
    
        return primes.map((isPrime, i) => isPrime ? i : null).filter(num => num !== null);
    }

    return result;
};

let left = 4;
let right = 6;
console.log(closestPrimes(left, right)); // [11, 13]
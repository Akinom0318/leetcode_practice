const MOD = 1e9 + 7;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let n = nums.length;
    let primeScores = new Array(n).fill(0);

    let maxElement = Math.max(...nums);
    let primes = getPrimes(maxElement);

    for (let index = 0; index < n; index++) {
        let num = nums[index];
        for (let prime of primes) {
            if (prime * prime > num) break;
            if (num % prime !== 0) continue;
            primeScores[index]++;
            while (num % prime === 0) num /= prime;
        }
        if (num > 1) primeScores[index]++;
    }

    let nextDominant = new Array(n).fill(n);
    let prevDominant = new Array(n).fill(-1);
    let decreasingStack = [];

    for (let index = 0; index < n; index++) {
        while (decreasingStack.length > 0 && primeScores[decreasingStack[decreasingStack.length - 1]] < primeScores[index]) {
            let topIndex = decreasingStack.pop();
            nextDominant[topIndex] = index;
        }
        if (decreasingStack.length > 0) {
            prevDominant[index] = decreasingStack[decreasingStack.length - 1];
        }
        decreasingStack.push(index);
    }

    let numOfSubarrays = new Array(n).fill(0);
    for (let index = 0; index < n; index++) {
        numOfSubarrays[index] = (BigInt(nextDominant[index] - index) * BigInt(index - prevDominant[index]));
    }

    let sortedArray = nums.map((num, index) => [num, index]);
    sortedArray.sort((a, b) => b[0] - a[0]);

    let score = 1n;
    let processingIndex = 0;

    while (k > 0) {
        let [num, index] = sortedArray[processingIndex++];
        let operations = BigInt(Math.min(k, Number(numOfSubarrays[index])));
        score = (score * power(BigInt(num), operations)) % BigInt(MOD);
        k -= Number(operations);
    }

    return Number(score);
};

function power(base, exponent) {
    let res = 1n;
    while (exponent > 0n) {
        if (exponent % 2n === 1n) {
            res = (res * base) % BigInt(MOD);
        }
        base = (base * base) % BigInt(MOD);
        exponent /= 2n;
    }
    return res;
}

function getPrimes(limit) {
    let isPrime = new Array(limit + 1).fill(true);
    let primes = [];
    for (let number = 2; number <= limit; number++) {
        if (!isPrime[number]) continue;
        primes.push(number);
        for (let multiple = number * number; multiple <= limit; multiple += number) {
            isPrime[multiple] = false;
        }
    }
    return primes;
}
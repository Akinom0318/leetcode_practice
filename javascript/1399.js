/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let digitsMap = new Map();
    let maxLength = 0;

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        digitsMap.set(sum, digitsMap.get(sum) ? digitsMap.get(sum) + 1 : 1);
        maxLength = Math.max(maxLength, digitsMap.get(sum));
    }

    return digitsMap.size === 1 ? digitsMap.get(maxLength) : Array.from(digitsMap.values()).filter(v => v === maxLength).length;
};

let n = 13;
console.log(countLargestGroup(n)); // Output: 4
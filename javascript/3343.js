/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function(num) {
    let mod = 1e9 + 7;
    let n = num.length;
    let countMap = Array(10).fill(0);
    let memo = new Map();
    for (let i = 0; i < n; i++) {
        countMap[num[i] - '0']++;
    }

    let remainingSum = 0;
    for (let j = 0; j < 10; j++) remainingSum += countMap[j] * j;


    function dfs(index, countMap, oddCount, evenCount) {
        if (Math.abs(oddCount - evenCount) > remainingSum) return 0;
        //console.log(index, oddCount, evenCount);
        let diff = oddCount - evenCount;
        let key = `${diff}-${encodeCount(countMap)}`;
        if (memo.has(key)) return memo.get(key);
        if (index === n) {
            return oddCount === evenCount ? 1 : 0;
        }

        let total = 0;
        for (let i = 0; i < 10; i++) {
            if (countMap[i] > 0) {
                countMap[i]--;
                if (index % 2 === 0) {
                    total = (total + dfs(index + 1, countMap, oddCount, evenCount + i)) % mod;
                } else {
                    total = (total + dfs(index + 1, countMap, oddCount + i, evenCount)) % mod;
                }                
                countMap[i]++;
            }
        }
        memo.set(key, total);

        return total;
    }

    function encodeCount(countMap) {
        return countMap.join('');
    }

    return dfs(0, countMap, 0, 0);
};


let nums = "123";
console.log(countBalancedPermutations(nums)); // Output: 6
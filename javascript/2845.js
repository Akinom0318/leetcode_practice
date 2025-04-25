/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    let prefix = 0;
    let count = new Map();
    count.set(0, 1);
    let ans = 0;

    for (let num of nums) {
        if (num % modulo === k) prefix++;

        let want = (prefix - k + modulo) % modulo;

        if (count.has(want)) {
            ans += count.get(want);
        }

        let key = prefix % modulo;
        count.set(key, (count.get(key) || 0) + 1);
    }

    return ans;
};

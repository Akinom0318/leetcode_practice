/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    let prefix = new Array(nums.length).fill(0);
    let ans = [];

    prefix[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 === nums[i - 1] % 2) {
            prefix[i] = prefix[i - 1] + 1;
        }else{
            prefix[i] = prefix[i - 1];
        }
    }

    for (const [start, end] of queries) {
        ans.push(prefix[end] - prefix[start] === 0);
    }

    return ans;
};
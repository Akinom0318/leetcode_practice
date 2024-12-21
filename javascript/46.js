/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    let n = nums.length;
    let backtrack = (first) => {
        if (first === n) {
            ans.push([...nums]);
            return;
        }
        for (let i = first; i < n; i++) {
            [nums[first], nums[i]] = [nums[i], nums[first]];
            backtrack(first + 1);
            [nums[first], nums[i]] = [nums[i], nums[first]];
        }
    };
    backtrack(0);
    return ans;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }

    let dp = new Array(nums.length + 1).fill(0);

    dp[0] = nums[0];
    dp[1] = nums[1];

    for(let i = 2; i < dp.length; i ++){
        dp[i] = Math.max(dp[i - 2], dp[i - 3] === undefined ? 0 : dp[i - 3]) + (nums[i] === undefined ? 0 : nums[i]);
    }

    return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
};

let nums = [1];
console.log(rob(nums));
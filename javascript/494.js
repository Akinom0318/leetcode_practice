/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
    const totalSum = nums.reduce((a, b) => a + b, 0);

    let dp = new Array(2 * totalSum + 1).fill(0);

    dp[nums[0] + totalSum] = 1;
    dp[-nums[0] + totalSum] += 1;

    for (let index = 1; index < nums.length; index++) {
        const nextDp = new Array(2 * totalSum + 1).fill(0);
        for (let sumVal = -totalSum; sumVal <= totalSum; sumVal++) {
            if (dp[sumVal + totalSum] > 0) {
                nextDp[sumVal + nums[index] + totalSum] += dp[sumVal + totalSum];
                nextDp[sumVal - nums[index] + totalSum] += dp[sumVal + totalSum];
            }
        }
        dp = nextDp;
    }

    return Math.abs(target) > totalSum ? 0 : dp[target + totalSum];
}

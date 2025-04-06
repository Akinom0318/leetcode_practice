/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    function helper(a ,b){
        return a % b === 0 || b % a === 0;
    }

    nums = nums.sort((a, b) => a - b);

    let dp = new Array(nums.length).fill(1);
    let prev = new Array(nums.length).fill(-1);
    let maxDp = -Infinity;
    let maxIndex = -Infinity;

    for(let i = 1; i < nums.length; i ++){
        for(let j = 0; j < i; j ++){
            if(helper(nums[i], nums[j]) && dp[j] + 1 > dp[i]){
                dp[i] = dp[j] + 1;
                prev[i] = j;
                if(dp[i] > maxDp){
                    maxDp = dp[i];
                    maxIndex = i;
                }
            }
        }
    }

    let result = [];

    if(maxDp === -Infinity){
        return [nums[0]];
    }

    while(maxIndex !== -1){
        result.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return result;
};

let nums = [1,2,3];
console.log(largestDivisibleSubset(nums));
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let sum = nums[0];
    let xorSum = nums[0];
    let max = -Infinity;

    while(right < nums.length){
        right ++;
        sum += nums[right];
        xorSum ^= nums[right];
        while(sum === xorSum){
            right ++;
            sum += nums[right];
            xorSum ^= nums[right];
        }

        sum -= nums[left];
        xorSum ^= nums[left];


        left ++;
        max = Math.max(max, right - left + 1);
    }

    return max;
};

let nums = [1,3,8,48,10];
console.log(longestNiceSubarray(nums));
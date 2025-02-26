/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let prefixSum = 0;
    let minSum = Infinity;
    let maxSum = -Infinity;

    for(const num of nums) {
        prefixSum += num;
        minSum = Math.min(minSum, prefixSum);
        maxSum = Math.max(maxSum, prefixSum);
    }

    return minSum < 0 && maxSum > 0 ? maxSum - minSum : Math.max(Math.abs(minSum), Math.abs(maxSum));
};

let nums = [1,-3,2,3,-4];
console.log(maxAbsoluteSum(nums)); // 5

let nums1 = [2,-5,1,-4,3,-2];
console.log(maxAbsoluteSum(nums1)); // 8
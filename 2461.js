/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let ans = 0;
    let currentSum = 0;
    let begin = 0;
    let end = 0;
    let numToIndex = {};

    while (end < nums.length) {
        let currNum = nums[end];
        let lastOccurrence = numToIndex[currNum] !== undefined ? numToIndex[currNum] : -1;

        while (begin <= lastOccurrence || end - begin + 1 > k) {
            currentSum -= nums[begin];
            begin++;
        }

        numToIndex[currNum] = end;

        currentSum += nums[end];

        if (end - begin + 1 === k) {
            ans = Math.max(ans, currentSum);
        }

        end++;
    }

    return ans;
};



let nums = [1,1,1,7,8,9];
let k = 3;
console.log(maximumSubarraySum(nums, k));
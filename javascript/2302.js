/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let n = nums.length;
    let currentSum = 0;
    let left = 0;
    let right = 0;
    let count = 0;

    while(right < n) {
        let rightNum = nums[right];
        currentSum += rightNum;

        while(currentSum * (right - left + 1) >= k) {
            let leftNum = nums[left];
            currentSum -= leftNum;
            left++;
        }

        count += right - left + 1;
        // console.log(`left: ${left}, right: ${right}, currentSum: ${currentSum}`);

        right++;
    }

    return count;
};

let nums = [1,1,1];
let k = 5;
console.log(countSubarrays(nums, k)); // 10

let nums2 = [2,1,4,3,5];
let k2 = 10;
console.log(countSubarrays(nums2, k2)); // 10
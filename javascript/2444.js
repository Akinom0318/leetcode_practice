/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let n = nums.length;
    let left = 0;
    let right = 0;
    let ans = 0;
    let minIndex = -1;
    let maxIndex = -1;


    while (right < n) {
        if (nums[right] < minK || nums[right] > maxK) {
            left = right + 1;
            minIndex = -1;
            maxIndex = -1;
        } else {
            if (nums[right] === minK) {
                minIndex = right;
            }
            if (nums[right] === maxK) {
                maxIndex = right;
            }
            ans += Math.max(0, Math.min(minIndex, maxIndex) - left + 1);
        }
        right++;
    }
    return ans;


};
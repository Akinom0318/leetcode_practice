/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    const freq = new Map();
    let left = 0, right = 0;
    let count = 0;

    while (right < nums.length) {
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);

        while (Math.max(...freq.keys()) - Math.min(...freq.keys()) > 2) {
            freq.set(nums[left], freq.get(nums[left]) - 1);
            if (freq.get(nums[left]) === 0) {
                freq.delete(nums[left]);
            }
            left++;
        }

        count += right - left + 1;
        right++;
    }

    return count;
};


let nums = [5,4,2,4];
console.log(continuousSubarrays(nums)); // 5
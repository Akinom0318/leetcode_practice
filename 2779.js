/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    if(nums.length < 2) return 1;
    nums = nums.sort((a, b) => b - a);
    //console.log(nums);
    let start = 0;
    let end = 1;
    let max_length = 0;
    while(end < nums.length) {
        if (Math.abs(nums[start] - nums[end]) <= 2 * k) {
            max_length = Math.max(max_length, end - start + 1);
            end++;
        } else {
            start++;
        }
    }
    return max_length;
};

let nums = [4,6,1,2];
let k = 2;
console.log(maximumBeauty(nums, k)); // 3
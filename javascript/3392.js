/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let left = 0;
    let mid = 1;
    let right = 2;
    let n = nums.length;
    let ans = 0; 
    
    while (right < n) {
        const sum = nums[left] + nums[right];
        if(sum * 2 === nums[mid]) {
            ans++;
        }
        left++;
        mid++;
        right++;
    }
    
    return ans;
};
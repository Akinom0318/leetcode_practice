/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let maxNum = Math.max(...nums);
    let left = 0;
    let right = 0;
    let n = nums.length;
    let ans = 0;
    let currCounter = 0;


    while(right < n){
        if(nums[right] === maxNum){
            currCounter++;
        }

        while(currCounter >= k){
            ans += n - right;
            if(nums[left] === maxNum){
                currCounter--;
            }
            left++;
        }
        right++;
    }

    return ans;
};

let nums = [1,3,2,3,3];
let k = 2;
console.log(countSubarrays(nums, k)); // Output: 6
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    function lowerBound(nums, val){
        let left = 0;
        let right = nums.length - 1;
        result = 0;
        while(left <= right){
            let sum = nums[left] + nums[right];
            if (sum < val){
                result += right - left;
                left++;
            }else{
                right--;
            }
        }
        return result;
    }

    nums.sort((a,b) => a - b);
    
    return lowerBound(nums, upper + 1) - lowerBound(nums, lower);
};

let nums = [0,1,7,4,4,5];
let lower = 3;
let upper = 6;
console.log(countFairPairs(nums, lower, upper)); // 6
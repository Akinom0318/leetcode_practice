    /**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let max = 0 ;
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) {
            sum += nums[i];
        } else {
            //console.log(i, sum, max);
            max = Math.max(sum, max);
            sum = nums[i];
        }
    }
    max = Math.max(sum, max);

    return max;
};

let nums = [3,6,10,1,8,9,9,8,9];
console.log(maxAscendingSum(nums)); // 65
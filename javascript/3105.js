/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let increasing = 1;
    let decreasing = 1;
    let max = -Infinity;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) {
            increasing++;
            decreasing = 1;
        } else if(nums[i] < nums[i - 1]) {
            decreasing++;
            increasing = 1;
        }else{
            increasing = 1;
            decreasing = 1;
            continue;
        }
        max = Math.max(max, Math.max(increasing, decreasing
        ));
        //console.log(max, increasing, decreasing, i);
    }

    return max === -Infinity ? 1 : max;
};

let nums = [3,3,3,3];
console.log(longestMonotonicSubarray(nums)); // 3
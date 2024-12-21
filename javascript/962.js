/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let max_valued = new Array(nums.length).fill(0);

    max_valued[max_valued.length - 1] = nums[nums.length - 1];
    for (let index = max_valued.length - 2; index >= 0; index --) {
        max_valued[index] = Math.max(max_valued[index + 1], nums[index]);
    }

    let max_width = 0;
    let left = 0;
    let right = 0;

    while(right < max_valued.length){
        while(left < right && nums[left] > max_valued[right]){
            left ++;
        }
        console.log(left, right);

        max_width = Math.max(max_width, right - left);
        right ++;
    }

    return max_width;
};

let nums = [6,0,8,2,1,5];
console.log(maxWidthRamp(nums));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let rotaion_pos = -1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[(i + 1) % nums.length]) {
            if(rotaion_pos !== -1) {
                return false;
            }
            rotaion_pos = i;
        }
    }
    if(nums[nums.length - 1] > nums[rotaion_pos]) {
        return false;
    }
    return true;
};
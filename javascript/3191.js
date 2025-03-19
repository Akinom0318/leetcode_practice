/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let left = 0;
    let n = nums.length;
    let count = 0;
    while(left < n){
        if(left >= n - 2 && nums[left] === 0){
            return -1;
        }
        
        if(nums[left] === 0){
            for(let i = left; i < left + 3; i ++){
                nums[i] = nums[i] === 0 ? 1 : 0;
            }
            count ++;
        }

        left ++;
    }

    return count;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    //bubble sort
    let pair_count = 0;
    for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] < target){
                pair_count ++;
            }
       }
    }

    return pair_count;
};
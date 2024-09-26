/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let current_target = nums[mid];

        if(current_target === target){
            return mid
        }

        if(current_target > target){
            right--;
        }else if(current_target < target){
            left++;
        }

    }
    return -1;
};

arr = [-1,0,3,5,9,12];

tar = 9;

console.log(search(arr,tar));
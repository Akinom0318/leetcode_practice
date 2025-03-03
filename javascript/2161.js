/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            result[left++] = nums[i];
        } 
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > pivot) {
            result[right--] = nums[i];
        }
    }


    while(left <= right) {
        result[left++] = pivot;
    }

    return result;
};

let nums = [9,12,5,10,14,3,10];
let pivot = 10;
console.log(pivotArray(nums, pivot)); // Output: [9, 3, 5, 10, 14, 10, 12]
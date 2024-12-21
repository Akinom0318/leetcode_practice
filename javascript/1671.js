/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    let LIS_nums = new Array(nums.length).fill(1);
    let LDS_nums = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]){
                LIS_nums[i] = Math.max(LIS_nums[i], LIS_nums[j] + 1);
            }
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[i] > nums[j]){
                LDS_nums[i] = Math.max(LDS_nums[i], LDS_nums[j] + 1);
            }
        }
    }

    let mountain_peak = 0;
    for (let i = 0; i < nums.length; i++) {
        if (LDS_nums[i] > 1 && LIS_nums[i] > 1){
            mountain_peak = Math.max(mountain_peak, LDS_nums[i] + LIS_nums[i] - 1);
        }
        
    }


    return nums.length - mountain_peak;
};

let nums = [4,3,2,1,1,2,3,1];
let nums1 = [1,3,1];
let nums2 = [1,2,3,4,4,3,2,1];
let nums3 = [4,5,13,17,1,7,6,11,2,8,10,15,3,9,12,14,16];
console.log(minimumMountainRemovals(nums));
console.log(minimumMountainRemovals(nums1));
console.log(minimumMountainRemovals(nums2));
console.log(minimumMountainRemovals(nums3));
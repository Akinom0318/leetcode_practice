/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    let left = 1;
    let right = Math.max(...nums);
    let n = nums.length;

    while(left < right){
        let mid = Math.floor((right + left) / 2);
        let possible = 0;

        for(let i = 0; i < n; i++){
            if(nums[i] <= mid){
                possible ++;
                i++;
            }
        }

        if(possible >= k){
            right = mid;
        }else{
            left = mid + 1;
        }
    }

    return left;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    let n = nums.length;
    let right = k - 1;
    let left = 0;
    let res = [];
    while (right < n) {
        let tmp_index = left;
        let prev = nums[tmp_index] - 1;
        while (tmp_index <= right) {
            if (nums[tmp_index] - prev !== 1){
                res.push(-1);
                break;
            }
            prev = nums[tmp_index];
            if (tmp_index === right) {
                res.push(nums[tmp_index]);
            }
            tmp_index++;
        }
        left++;
        right++;
    }
    return res;
};

let nums = [3,2,3,2,3,2];
let k = 2;
console.log(resultsArray(nums, k)); // [3,2,5]
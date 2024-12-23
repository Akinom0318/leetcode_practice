/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let average = new Set();
    while(nums.length > 0){
        let min = nums.shift();
        let max = nums.pop();
        average.add((min + max) / 2);
    }
    return average.size;
};
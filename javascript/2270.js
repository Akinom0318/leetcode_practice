/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let prefixSum = 0;
    let pointer = 0;
    let totalCount = 0;
    while(pointer < nums.length - 1){
        prefixSum += nums[pointer];
        if(prefixSum >= totalSum - prefixSum){
            totalCount ++;
        }
        pointer ++;
    }

    return totalCount;
};

let nums = [10,4,-8,7];
console.log(waysToSplitArray(nums)); // 2
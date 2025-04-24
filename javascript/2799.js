/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let numSet = new Set(nums);

    let numCount = numSet.size;
    let n = nums.length;

    let left = 0;
    let right = 0;
    let count = 0;
    let numHash = new Map();
    while(right < n) {
        let rightNum = nums[right];
        numHash.set(rightNum, (numHash.get(rightNum) || 0) + 1);
        right++;

        while(numHash.size === numCount) {
            count += n - right + 1;
            let leftNum = nums[left];
            numHash.set(leftNum, numHash.get(leftNum) - 1);
            if(numHash.get(leftNum) === 0) {
                numHash.delete(leftNum);
            }
            left++;
        }
       
    }

    return count;
};

let nums = [5,5,5,5];
console.log(countCompleteSubarrays(nums)); // 10
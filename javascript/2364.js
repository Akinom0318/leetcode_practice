/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let totalPairs = nums.length * (nums.length - 1) / 2;
    let hash = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        hash.set(nums[i] - i, hash.get(nums[i] - i) + 1 || 1);
    }

//    console.log(hash);

    for(const value of hash.values()) {
        if(value > 1) {
            totalPairs -= value * (value - 1) / 2;
        }
    }

    return totalPairs;
};

let nums = [1,2,3,4,5];
console.log(countBadPairs(nums));
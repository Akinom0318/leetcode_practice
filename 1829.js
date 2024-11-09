/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let curren_xor = 0;
    let target = Math.pow(2,maximumBit) - 1;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        curren_xor = curren_xor ^ nums[i];
        result.push(target ^ curren_xor);
    }


    return result.reverse();

};

let nums = [0,1,1,3];
let maximumBit = 2;
console.log(getMaximumXor(nums, maximumBit));
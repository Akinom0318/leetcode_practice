/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let hash = {};
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let product = nums[i] * nums[j];
            hash[product] = (hash[product] || 0) + 1;
        }
    }

    for(let key in hash) {
        let count = hash[key];
        if(count > 1) {
            result += count * (count - 1) / 2 * 8;
        }
    }

    return result;
};

let nums = [1,2,4,5,10];
console.log(tupleSameProduct(nums)); // 8   
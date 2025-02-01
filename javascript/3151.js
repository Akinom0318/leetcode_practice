/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let prev = -1;
    for(const num of nums) {
        if(num % 2 === prev % 2) {
            return false;
        }
        prev = num;
    }
    return true;
};

let nums = [4,3,1,6];
console.log(isArraySpecial(nums));
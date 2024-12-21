/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let sum = 0;
    nums.forEach(item => {
        sum = (item + sum);
    });
    let target = sum % p;
    if(!target){
        return 0;
    }
    let table = {0: -1};
    let current_sum = 0;
    let min_len = nums.length;
    for (let index = 0; index < nums.length; index++) {
        current_sum = (current_sum + nums[index]) % p;
        let needed = (current_sum - target + p) % p;
        if(table[needed] !== undefined){
            min_len = Math.min(min_len, index - table[needed]);
        }
        table[current_sum] = index;
    }

    return min_len === nums.length ? -1 : min_len;
};

let nums = [17,6,22,31,25,4,18,32,18,26,2,31,26,8,12,2];
let p = 142;

console.log(minSubarray(nums,p));
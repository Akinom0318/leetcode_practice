/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    nums.push(Infinity);
    let res = 0;
    let start = -1;
    let i = 1;

    while (i < nums.length) {
        if (nums[i] >= nums[i - 1]) {
            for (let j = i - 1; j > start; j -= 2) {
                res += nums[j];
            }
            start = i;
            i += 1;
        }
        i += 1;
    }

    return res;
};

let nums = [10,44,10,8,48,30,17,38,41,27,16,33,45,45,34,30,22,3,42,42];
console.log(findScore(nums)); // 9

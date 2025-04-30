/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;

    for(let num of nums){
        count = count + ((num + "").length & 1 ? 0 : 1);
    }

    return count;
};
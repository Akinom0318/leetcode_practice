/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max = Math.max(...nums);

    let count = 0;
    let pre_count = 0;
    for(const num of nums){
        if(num === max){
            count ++;
        }else if(num !== max){
            if(count > pre_count){
                pre_count = count;
            }
            count = 0;
        }
    }

    return (count > pre_count ? count : pre_count);
};

console.log(longestSubarray(arr));
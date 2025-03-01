/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0){
            continue;
        }
        if(nums[i] === nums[i + 1]){
                result.push(nums[i] * 2);
                nums[i + 1] = 0;
        }else{
                result.push(nums[i]);
        }
    }

    while(result.length < nums.length){
        result.push(0);
    }

    return result;
};

let nums = [1,2,2,1,1,0];
console.log(applyOperations(nums)); // Output: [1,4,1,0,0,0]
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let result = 0;

    function backtracking(current, index){
        for(let i = index; i < nums.length; i ++){
            let tmp = current;
            tmp ^= nums[i];
            result += tmp;
            backtracking(tmp, i + 1);
        }
    }

    backtracking(0, 0);
    return result;
};

let nums = [1,1,1];
console.log(subsetXORSum(nums));
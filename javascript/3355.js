/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    let prefixMinus = new Array(nums.length).fill(0);
    
    for(let [left, right] of queries){
        if(left > 0){
            prefixMinus[left - 1] -= 1;
        }
        prefixMinus[right] += 1;
    }

    if(nums[nums.length - 1] > prefixMinus[prefixMinus.length - 1]){
        return false;
    }

    for(let i = prefixMinus.length - 2; i >= 0; i --){
        prefixMinus[i] += prefixMinus[i + 1];
        if(nums[i] > prefixMinus[i]){
            return false;
        }
    }


    return true;
};

let nums = [1,2,1,0,0,0];
let queries = [[0,3],[2,4]];
console.log(isZeroArray(nums,queries));
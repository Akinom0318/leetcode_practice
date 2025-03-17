/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let hash = new Map();

    for(const num of nums){
        hash.set(num, (hash.get(num) | 0) + 1);
    }

    for(const [key, value] of hash){
        if(value % 2 !== 0){
            return false;
        }
    }

    return true;
};

let nums = [3,2,3,2,2,2];
console.log(divideArray(nums));
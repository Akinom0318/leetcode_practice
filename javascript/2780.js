/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    if(nums.length === 1){
        return -1;
    }
    let hash = new Map();

    let dominant = 0;
    let maxCount = -Infinity;
    for(const num of nums){
        hash.set(num, (hash.get(num) | 0) + 1);
        if(hash.get(num) > maxCount){
            dominant = num;
            maxCount = hash.get(num);
        }
    }

    if(hash.get(dominant) === nums.length){
        return 0;
    }

    let count = 0;
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] === dominant){
            count ++;
        }

        if(count > Math.ceil(i / 2) && (Math.floor((nums.length - i - 1) / 2) < hash.get(dominant) - count)){
            return i;
        }
    }


    return -1;
};

let nums = [1,1,1,2];
console.log(minimumIndex(nums));
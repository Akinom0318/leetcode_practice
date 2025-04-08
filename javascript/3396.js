/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let hash = new Map();
    let multiples = new Map();

    for(const num of nums) {
        if(hash.get(num) >= 1){
            multiples.set(num, (multiples.get(num) || 0) + 1);
        }
        hash.set(num, (hash.get(num) || 0) + 1);
    }

    let pointer = 0;
    while(multiples.size > 0){
        const currentNum = nums[pointer];
        if(multiples.has(currentNum)){
            multiples.set(currentNum, multiples.get(currentNum) - 1);
            if(multiples.get(currentNum) === 0){
                multiples.delete(currentNum);
            }
        }
        pointer++;
    }

    return Math.ceil(pointer / 3);
};

let nums = [1,2,3,4,2,3,3,5,7];
console.log(minimumOperations(nums)); // Output: 3
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let hash = new Map();

    function numberOfBit(a) {
        const countOnes = num => (num.toString(2)).split('0').join('').length;
        return countOnes(a);
    }

    for (let i = 1; i < nums.length; i++) {
        let j = i;

        while (j > 0 && nums[j] < nums[j - 1]) {
            if (!hash.has(nums[j])){
                hash.set(nums[j], numberOfBit(nums[j]));
            }
            if (!hash.has(nums[j - 1])){
                hash.set(nums[j - 1], numberOfBit(nums[j - 1]));
            }
    
            let bitA = hash.get(nums[j]);
            let bitB = hash.get(nums[j - 1]);
            if (bitA === bitB){
                [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
            }
            j--;
        }
    }

    //console.log(nums);
    let result = true;
    for (let i = 0; i < nums.length - 1; i++) {
        const element = nums[i];
        const n_element = nums[i + 1];
        if (element > n_element){
            result = false;
            break;
        }
    }

    return result;
};

let nums = [3,16,8,4,2];
console.log(canSortArray(nums));
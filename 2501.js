/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    let numbers = new Set(Array.from(nums.sort((a, b) => Number(a) - Number(b))));
    let hash = {};
    let max_length = 0;

    numbers.delete()
    
    function check_square(base, num, set, current_length){
        if (set.has(num)){
            hash[base].push(num);
            set.delete(num);
            check_square(base, num * num, set, current_length + 1);
        }
        max_length = Math.max(current_length, max_length);

        return;
    }

    for (const num of numbers){
        if (!hash[num]){
            hash[num] = [num];
        }
        check_square(num, num * num, numbers, 1);
    }

    return max_length === 1 ? -1 : max_length;
};

let nums = [4,3,6,16,8,2];
console.log(longestSquareStreak(nums));
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let digitsToNum = new Map();
    function helper(num){
        let sum = 0;
        while(num > 0){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    let max = -Infinity

    for(const num of nums){
        let sum = helper(num);
        if(!digitsToNum.has(sum)){
            digitsToNum.set(sum, [num]);
        } else {
            if(digitsToNum.get(sum).length === 1){
                digitsToNum.get(sum).push(num);
            }else{
                digitsToNum.get(sum).push(num);
                digitsToNum.get(sum).sort((a, b) => b - a);
                digitsToNum.get(sum).pop();
            }
            max = Math.max(max, digitsToNum.get(sum)[0] + digitsToNum.get(sum)[1]);
        }
    }


    return max === -Infinity ? -1 : max;
};

let nums = [18,43,36,13,7];
console.log(maximumSum(nums)); // Output: 18
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    let differenceArray = new Array(nums.length + 1).fill(0);
    let result = 0;
    let sum = 0;

    for(let i = 0; i < nums.length; i ++){
        while(sum + differenceArray[i] < nums[i]){
            result ++;
            if(result > queries.length){
                return -1;
            }

            const [left, right, val] = queries[result - 1];

            if(right >= i){
                differenceArray[Math.max(left, i)] += val;
                differenceArray[right + 1] -= val;
            }
        }

        sum += differenceArray[i];
    }
    return result;
};
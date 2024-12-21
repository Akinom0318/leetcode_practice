/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    let result = [];
    nums.forEach((num, index) => {
        result.push([num, index]);
    });

    while(k > 0){
        result.sort((a, b) => {
            if (a[0] === b[0]){
                return b[1] - a[1];
            }
            return b[0] - a[0];
        });
        let [num, index] = result.pop();
        result.push([num * multiplier, index]);
        k--;
    }

    result.sort((a, b) => a[1] - b[1]);
    return result.map(([num, _]) => num);

};

let nums = [2,1,3,5,6];
let k = 5;
let multiplier = 2;
console.log(getFinalState(nums, k, multiplier));
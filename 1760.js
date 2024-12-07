/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
    function canDivide(penalty) {
        let operations = 0;
        for (let num of nums) {
            if (num > penalty) {
                operations += Math.floor((num - 1) / penalty);
                if (operations > maxOperations) {
                    return false;
                }
            }
        }
        return true;
    }

    let left = 1;
    let right = Math.max(...nums);
    let result = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canDivide(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};


let nums = [431,922,158,60,192,14,788,146,788,775,772,792,68,143,376,375,877,516,595,82,56,704,160,403,713,504,67,332,26];
let maxOperations = 80;
console.log(minimumSize(nums, maxOperations)); // 5
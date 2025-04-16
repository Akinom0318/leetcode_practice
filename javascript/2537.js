/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    function helper(n) {
        return n * (n - 1) / 2;
    }

    let n = nums.length;
    let left = 0;
    let right = 0;
    let count = 0;
    let map = new Map();
    let tmpPair = 0;

    while (left < n) {
        while (right < n && tmpPair < k) {
            let num = nums[right];
            let prev = map.get(num) || 0;
            tmpPair -= helper(prev);
            map.set(num, prev + 1);
            tmpPair += helper(prev + 1);
            right++;
        }

        if (tmpPair >= k) {
            count += n - right + 1;
        }

        let num = nums[left];
        let prev = map.get(num);
        tmpPair -= helper(prev);
        map.set(num, prev - 1);
        if (prev - 1 > 0) {
            tmpPair += helper(prev - 1);
        } else {
            map.delete(num);
        }

        left++;
    }

    return count;
};

let nums = [3,1,4,3,2,2,4];
let k = 2;
console.log(countGood(nums, k)); // 1
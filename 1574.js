/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    let n = arr.length;
    let right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }
    if (right == 0) {
        return 0;
    }

    let res = right;
    for (let left = 0; left < n; left++) {
        if (left > 0 && arr[left] < arr[left - 1]) {
            break;
        }
        while (right < n && arr[left] > arr[right]) {
            right++;
        }
        res = Math.min(res, right - left - 1);
    }

    return res;
};

let arr = [1,2,3];
console.log(findLengthOfShortestSubarray(arr)); // 8
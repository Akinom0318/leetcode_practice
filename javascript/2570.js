/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2];
    let hash = new Map();
    let result = [];

    for (const [id, value] of nums) {
        if (hash.has(id)) {
            hash.set(id, hash.get(id) + value);
        } else {
            hash.set(id, value);
        }
    }

    function insertInOrder(array, value) {
        let left = 0;
        let right = array.length;
    
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (array[mid][0] < value[0]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    
        array.splice(left, 0, value);
    }


    for (const [id, value] of hash) {
        insertInOrder(result, [id, value]);
    }

    return result;
};

let nums1 = [[1,2],[2,3],[4,5]];
let nums2 = [[1,4],[3,2],[4,1]];
console.log(mergeArrays(nums1, nums2)); // Output: [[1,6],[2,3],[4,6],[3,2]]
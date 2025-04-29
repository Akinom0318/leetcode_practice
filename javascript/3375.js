/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const st = new Set();
    for (const x of nums) {
        if (x < k) {
            return -1;
        } else if (x > k) {
            st.add(x);
        }
    }
    return st.size;
};

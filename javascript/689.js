/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSumOfThreeSubarrays(nums, k) {
    const n = nums.length;

    // Prefix sum array to calculate sum of any subarray in O(1) time
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    // Arrays to store the best sum and starting indices for up to 3 subarrays
    const bestSum = Array.from({ length: 4 }, () => new Array(n + 1).fill(0));
    const bestIndex = Array.from({ length: 4 }, () => new Array(n + 1).fill(0));

    // Compute the best sum and indices for 1, 2, and 3 subarrays
    for (let t = 1; t <= 3; t++) {
        for (let i = k * t; i <= n; i++) {
            const currentSum = 
                prefixSum[i] - prefixSum[i - k] + bestSum[t - 1][i - k];

            // Check if the current configuration gives a better sum
            if (currentSum > bestSum[t][i - 1]) {
                bestSum[t][i] = currentSum;
                bestIndex[t][i] = i - k;
            } else {
                bestSum[t][i] = bestSum[t][i - 1];
                bestIndex[t][i] = bestIndex[t][i - 1];
            }
        }
    }

    // Trace back the indices of the three subarrays
    const result = new Array(3).fill(0);
    let end = n;
    for (let t = 3; t > 0; t--) {
        result[t - 1] = bestIndex[t][end];
        end = result[t - 1];
    }

    return result;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, targetSum) {
    const n = nums.length;

    // Create prefix sums array with size n + 1
    const prefixSums = new Array(n + 1).fill(0);

    // Calculate prefix sums
    for (let i = 1; i <= n; i++) {
        prefixSums[i] = prefixSums[i - 1] + nums[i - 1];
    }

    const candidateIndices = []; // Use an array to simulate a deque
    let shortestSubarrayLength = Infinity;

    for (let i = 0; i <= n; i++) {
        // Remove indices from the front where the subarray sum meets or exceeds the target
        while (
            candidateIndices.length > 0 &&
            prefixSums[i] - prefixSums[candidateIndices[0]] >= targetSum
        ) {
            shortestSubarrayLength = Math.min(
                shortestSubarrayLength,
                i - candidateIndices.shift()
            );
        }

        // Maintain monotonicity: remove indices with larger prefix sums from the back
        while (
            candidateIndices.length > 0 &&
            prefixSums[i] <= prefixSums[candidateIndices[candidateIndices.length - 1]]
        ) {
            candidateIndices.pop();
        }

        // Add the current index to the deque
        candidateIndices.push(i);
    }

    // Return -1 if no valid subarray found
    return shortestSubarrayLength === Infinity ? -1 : shortestSubarrayLength;
};



let nums = [-34,37,51,3,-12,-50,51,100,-47,99,34,14,-13,89,31,-14,-44,23,-38,6];
console.log(shortestSubarray(nums, 151)); // 3
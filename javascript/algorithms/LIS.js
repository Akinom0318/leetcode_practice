function LIS(nums) {
    const n = nums.length;
    const LIS = Array(n).fill(1);
    // Compute LIS for each index
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                LIS[i] = Math.max(LIS[i], LIS[j] + 1);
            }
        }
    }
}
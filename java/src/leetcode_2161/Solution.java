package leetcode_2161;

class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        int n = nums.length;
        int[] result = new int[n];

        int left = 0;
        int right = n - 1;

        for (int num : nums) {
            if (num < pivot) {
                result[left++] = num;
            }
        }

        for (int i = n - 1; i >= 0; i--){
            if (nums[i] > pivot){
                result[right--] = nums[i];
            }
        }

        while(left <= right){
            result[left++] = pivot;
        }

        return result;
    }
}
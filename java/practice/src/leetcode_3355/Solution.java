package leetcode_3355;

class Solution {
    public boolean isZeroArray(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] differenceArray = new int[n + 1];
        for (int[] query : queries) {
            int left = query[0];
            int right = query[1];

            differenceArray[left] += 1;
            if (right + 1 != nums.length) {
                differenceArray[right + 1] -= 1;
            }
        }

        if(differenceArray[0] < nums[0]){
            return  false;
        }

        for(int i = 1; i < nums.length; i ++){
            differenceArray[i] += differenceArray[i - 1];
            if(differenceArray[i] < nums[i]){
                return false;
            }
        }

        return true;
    }
}
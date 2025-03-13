package leetcode_3356;

class Solution {
    public int minZeroArray(int[] nums, int[][] queries) {
        int result = 0;
        int sum = 0;
        int n = nums.length;
        int[] differenceArray = new int[n + 1];
        for(int i = 0; i < n; i++){
            while(sum + differenceArray[i] < nums[i]){
                result ++;
                if(result > queries.length){
                    return  -1;
                }
                int left = queries[result - 1][0];
                int right = queries[result - 1][1];
                int val = queries[result - 1][2];

                if(right >= i){
                    differenceArray[Math.max(left,i)] += val;
                    differenceArray[right + 1] -= val;
                }
            }
            sum += differenceArray[i];
        }
        return result;
    }
}
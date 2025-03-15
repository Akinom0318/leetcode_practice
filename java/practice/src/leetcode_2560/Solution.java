package leetcode_2560;

import java.util.Arrays;

public class Solution {
    public int minCapability(int[] nums, int k) {
        int left = 1;
        int right = Arrays.stream(nums).max().orElse(0);
        int n = nums.length;

        while(left < right){
            int mid = (left + right) / 2;
            int possible = 0;
            for(int i = 0; i < n; i ++){
                if(nums[i] <= mid){
                    possible ++;
                    i ++;
                }
            }

            if(possible >= k){
                right = mid;
            }else{
                left = mid + 1;
            }
        }

        return  left;
    }
}

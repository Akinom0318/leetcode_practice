package leetcode_198;

import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int rob(int[] nums) {
        int n = nums.length;
        if(n == 1){
            return  nums[0];
        }
        ArrayList<Integer> dp = new ArrayList<>(Collections.nCopies(n + 1, 0));

        dp.set(0, nums[0]);
        dp.set(1, nums[1]);

        for(int i = 2; i < dp.size(); i ++){
            dp.set(i, Math.max(
                   dp.get(i - 2),
                    i - 3 >= 0 ? dp.get(i - 3) : 0
            ) + (i < nums.length ? nums[i] : 0));
        }

        return Math.max(dp.getLast(), dp.get(dp.size() - 2));

    }
}
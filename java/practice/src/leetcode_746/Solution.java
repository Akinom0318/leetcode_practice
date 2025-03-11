package leetcode_746;
import java.util.*;


class Solution {
    public int minCostClimbingStairs(int[] cost) {
        ArrayList<Integer> dp = new ArrayList<>( Collections.nCopies(cost.length + 1, 0));

        for(int i = 2; i < dp.size(); i ++){
            dp.set(i, Math.min(dp.get(i - 1) + cost[i - 1], dp.get(i - 2) + cost[ i - 2]));
        }

        return dp.get(cost.length);
    }
}
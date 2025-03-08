package leetcode_2965;

import java.util.*;

class Solution {
    public int[] findMissingAndRepeatedValues(int[][] grid) {
        int total = grid.length * grid.length;
        total = total * (total + 1) / 2;
        int[] result = {0, 0};
        Set<Integer> set = new LinkedHashSet<>();


        for(int[] row: grid){
            for(int num: row){
                if(set.contains(num)){
                    result[0] = num;
                }else{
                    total -= num;
                    set.add(num);
                }
            }
        }

        result[1] = total;

        return result;
    }

    public static void main(String[] args){
        int[][] nums = {{1,3},{2,2}};
        Solution test = new Solution();
        System.out.println(Arrays.toString(test.findMissingAndRepeatedValues(nums)));
    }
}
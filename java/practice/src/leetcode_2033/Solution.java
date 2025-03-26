package leetcode_2033;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public int minOperations(int[][] grid, int x) {
        int[] oneDArray = new int[grid.length * grid[0].length];

        int i = 0;
        for(int[] row : grid){
            for(int element : row){
                oneDArray[i++] = element;
            }
        }


        if(oneDArray.length == 1){
            return 0;
        }

        Arrays.sort(oneDArray);

        int median = oneDArray[(int) (oneDArray.length / 2)];


        int count = 0;
        for(int element : oneDArray){
            int val = Math.abs(median - element) % x == 0 ? Math.abs(median - element) / x : -1;
            if(val == -1){
                return -1;
            }

            count += val;
        }

        return count;
    }
}
package leetcode_3169;

import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public int countDays(int days, int[][] meetings) {
        int freeDays = 0;
        int latestEndDay = 0;

        Arrays.sort(meetings, Comparator.comparingInt(a -> a[0]));

        for(int[] meeting : meetings){
            int start = meeting[0];
            int end = meeting[1];
            if(start > latestEndDay){
                freeDays += start - latestEndDay - 1;
            }
            latestEndDay = Math.max(latestEndDay, end);
        }

        freeDays += days - latestEndDay;

        return  freeDays;
    }
}
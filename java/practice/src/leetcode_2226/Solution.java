package leetcode_2226;

import java.lang.reflect.Array;
import java.util.Arrays;

class Solution {
    public int maximumCandies(int[] candies, long k) {
        int lowerBound = 1;
        int upperBound = Arrays.stream(candies).max().orElse(0);

        return  binarySearch(k, lowerBound, upperBound, candies);
    }

    private int binarySearch(long target, int lowerBound, int upperBound, int[] piles){
        int left = lowerBound;
        int right = upperBound;
        int result = 0;

        while(left <= right){
            long valid = 0;
            int mid = left + (right -  left) / 2;
            for(int pile : piles){
                valid += pile / mid;
                if(valid >= target){
                    break;
                }
            }
            if(valid >= target){
                result = mid;
                left = mid + 1;
            }else{
                right = mid - 1;
            }

        }

        return result;
    }
}
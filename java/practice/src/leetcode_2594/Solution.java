package leetcode_2594;

import java.util.Arrays;

class Solution {
    public long repairCars(int[] ranks, int cars) {
        long left = 1;
        long right = (long) Arrays.stream(ranks).min().orElse(Integer.MAX_VALUE) * (long) Math.pow(cars, 2);
        long result = 0;

        while (left <= right) {
            long mid = (left + right) / 2;
            long repaired = 0;

            for (int rank : ranks) {
                repaired += (long) Math.sqrt(mid / rank);
                if (repaired >= cars) {
                    break;
                }
            }

            if (repaired >= cars) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }

//    public  static  void main(String[] args){
}
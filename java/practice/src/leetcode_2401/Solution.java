package leetcode_2401;

class Solution {
    public int longestNiceSubarray(int[] nums) {
        int left = 0;
        int right = 0;
        long sum = nums[0];
        long xorSum = nums[0];
        int max = Integer.MIN_VALUE;

        while(right < nums.length){
            right ++;
            if (right < nums.length){
                sum += nums[right];
                xorSum ^= nums[right];
                while(sum == xorSum){
                    right ++;
                    if(right >= nums.length){
                        break;
                    }
                    sum += nums[right];
                    xorSum ^= nums[right];
                }

                sum -= nums[left];
                xorSum ^= nums[left];

            }

            left ++;
            max = Math.max(max, right - left + 1);
        }

        return max;
    }
}
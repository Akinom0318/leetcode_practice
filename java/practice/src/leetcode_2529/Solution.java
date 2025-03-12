package leetcode_2529;

class Solution {
    public int maximumCount(int[] nums) {
        int posCount = nums.length - binarySearchPos(nums);
        int negCount = binarySearchNeg(nums);

        return  Math.max(posCount, negCount);
    }

    private int binarySearchPos(int[] nums){
        int left = 0;
        int right = nums.length - 1;
        int ind = nums.length;
        while(left <= right){
            int mid = left + (int) Math.floor((double)(right - left) / 2);
            if(nums[mid] <= 0){
                left = mid + 1;
            }else{
                right = mid - 1;
                ind = mid;
            }
        }

        return  ind;
    }

    private int binarySearchNeg(int[] nums){
        int left = 0;
        int right = nums.length - 1;
        int ind = nums.length;
        while(left <= right){
            int mid = left + (int) Math.floor((double)(right - left) / 2);
            if(nums[mid] < 0){
                left = mid + 1;
            }else{
                right = mid - 1;
                ind = mid;
            }
        }

        return  ind;
    }
}
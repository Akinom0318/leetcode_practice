class Solution {
    public int minOperations(int[] nums) {
        int left = 0;
        int n = nums.length;
        int count = 0;
        while(left < n){
            if(left >= n - 2 && nums[left] == 0){
                return -1;
            }
            
            if(nums[left] == 0){
                for(int i = left; i < left + 3; i ++){
                    nums[i] = nums[i] == 0 ? 1 : 0;
                }
                count ++;
            }
    
            left ++;
        }
    
        return count;
    }
}
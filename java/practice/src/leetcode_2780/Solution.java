package leetcode_2780;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

class Solution {
    public int minimumIndex(List<Integer> nums) {
        if(nums.size() == 1){
            return -1;
        }
        HashMap<Integer, Integer> hash = new HashMap<>();

        int dominant = 0;
        int maxCount = Integer.MIN_VALUE;
        for(int num : nums){
            hash.put(num, (hash.getOrDefault(num,0)) + 1);
            if(hash.get(num) > maxCount){
                dominant = num;
                maxCount = hash.get(num);
            }
        }

        if(hash.get(dominant) == nums.size()){
            return 0;
        }

        int count = 0;
        for(int i = 0; i < nums.size(); i ++){
            if(nums.get(i) == dominant){
                count ++;
            }

            if (count > (i + 1) / 2 && ((nums.size() - i - 1) / 2 < hash.get(dominant) - count)) {
                return i;
            }
        }


        return -1;
    }
}
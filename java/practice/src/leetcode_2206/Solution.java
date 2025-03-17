package leetcode_2206;

import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean divideArray(int[] nums) {
        HashMap<Integer, Integer> hash = new HashMap<>();

        for(int num : nums){
            hash.put(num, hash.getOrDefault(num, 0) + 1);
        }

        for(Map.Entry<Integer, Integer> entry : hash.entrySet()){
            if(entry.getValue() % 2 != 0){
                return  false;
            }
        }

        return  true;
    }
}
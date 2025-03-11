package leetcode_1358;
import java.util.*;
class Solution {
    public int numberOfSubstrings(String s) {
        int left = 0;
        int right = 0;
        int result = 0;

        HashMap<Character, Integer> hash = new HashMap<>();

        while(right < s.length()){
            char end_chr = s.charAt(right);
            hash.put(end_chr, hash.getOrDefault(end_chr, 0) + 1);
            while(hash.size() == 3){
                char start_chr = s.charAt(left);
                result += s.length() - right;

                if(hash.get(start_chr) == 1){
                    hash.remove(start_chr);
                }else{
                    hash.put(start_chr, hash.get(start_chr) - 1);
                }
                left ++;
            }
            right ++;
        }

        return  result;
    }
}
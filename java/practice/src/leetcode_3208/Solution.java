package leetcode_3208;
import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int numberOfAlternatingGroups(int[] colors, int k) {
        int n = colors.length;
        List<Integer> new_colors = Arrays.stream(colors).boxed().collect(Collectors.toList());

        for(int i = 0; i < k; i ++){
            new_colors.add(colors[i]);
        }

        int count = 0;
        int left = 0;
        int right = 1;

        while(left < n){
            if(!Objects.equals(new_colors.get(right), new_colors.get(right + 1))){
                right ++;
            }else{
                left = right;
                right = left + 1;
                continue;
            }


            if(right < k + left){
                continue;
            }

            left ++;
            count ++;
        }

        return  count;
    }
}
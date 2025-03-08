package leetcode_2379;

class Solution {
    public int minimumRecolors(String blocks, int k) {
        int left = 0;
        int right = 0;
        int black_count = 0;
        int min = Integer.MAX_VALUE;

        while(right < k){
            if(blocks.charAt(right++) == 'B'){
                black_count++;
            }
        }

        min = Math.min(min, k - black_count);

        while(right < blocks.length()){
            if(blocks.charAt(left++) == 'B'){
                black_count--;
            }

            if(blocks.charAt(right++) == 'B'){
                black_count++;
            }

            min = Math.min(min, k - black_count);
        }

        return min;
    }

    public static void main(String[] args){
        String blocks = "WBBWWBBWBW";
        int k = 7;
        Solution test = new Solution();
        System.out.println(test.minimumRecolors(blocks,k));
    }

}

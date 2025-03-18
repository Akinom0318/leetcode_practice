package leetcode_190;

public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        long result = 0;
        int bitCount = 32;
        while(n != 0){
            result = (result << 1) | (n & 1);
            n >>>= 1;
            bitCount --;
        }

        while(bitCount > 0){
            result = result << 1;
            bitCount --;
        }



        return Integer.parseUnsignedInt(String.valueOf(result));
    }
}
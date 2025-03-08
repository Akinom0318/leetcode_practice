package leetcode_2523;

import java.util.*;
import java.util.stream.IntStream;

class Solution {
    public int[] closestPrimes(int left, int right) {
        int[] primes = sieveOfEratosthenes(right);
        int minDiff = Integer.MAX_VALUE;
        int[] result = {-1, -1};

        for (int i = 0; i < primes.length; i++) {
            if (i > 0 && primes[i] >= left && primes[i] <= right && primes[i - 1] >= left && primes[i - 1] <= right) {
                if (primes[i] - primes[i - 1] < minDiff) {
                    minDiff = primes[i] - primes[i - 1];
                    result[0] = primes[i - 1];
                    result[1] = primes[i];
                }
            }
        }

        return  result;
    }

    public int[] sieveOfEratosthenes(int n){
        boolean[] primes = new boolean[n + 1];
        Arrays.fill(primes, true);

        primes[0] = false;
        primes[1] = false;

        for(int p = 2; p * p <= n; p++){
            if(primes[p]){
                for(int i = p * p; i <= n; i += p){
                    primes[i] = false;
                }
            }
        }

        int[] primeInt = IntStream.range(0, primes.length).filter(i -> primes[i]).toArray();

        return  primeInt;
    }

//    public static void main(String[] args){
//        int left = 1;
//        int right = 1000000;
//        Solution test = new Solution();
//        System.out.println(Arrays.toString(test.closestPrimes(left,right)));
//    }
}
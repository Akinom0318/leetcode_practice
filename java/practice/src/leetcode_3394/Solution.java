package leetcode_3394;

import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public boolean checkValidCuts(int n, int[][] rectangles) {
        int[][] sortByX = Arrays.copyOf(rectangles, rectangles.length);
        Arrays.sort(sortByX, Comparator.comparingInt(a -> a[0]));

        int latestX= 0;
        int possibleCut = 0;

        for(int[] rectangle : sortByX){
            int x1 = rectangle[0];
            int x2 = rectangle[2];

            if(x1 >= latestX && latestX != 0){
                possibleCut ++;
            }

            latestX = Math.max(latestX, x2);
        }

        if(possibleCut >= 2){
            return  true;
        }

        possibleCut = 0;

        int[][] sortByY = Arrays.copyOf(rectangles, rectangles.length);
        Arrays.sort(sortByY, Comparator.comparingInt(a -> a[1]));

        int latestY= 0;

        for(int[] rectangle : sortByY){
            int y1 = rectangle[1];
            int y2 = rectangle[3];

            if(y1 >= latestY && latestY != 0){
                possibleCut ++;
            }

            latestY = Math.max(latestY, y2);
        }


        return possibleCut >= 2;
    }
}
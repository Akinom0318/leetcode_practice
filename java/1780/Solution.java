class Solution {
    public static boolean decimalToTernary(int n){
        while(n > 0){
            if (n % 3 > 1){
                return  false;
            }
            n = (int) Math.floor(n / 3);
        }

        return true;
    }


    public static boolean checkPowersOfThree(int n) {
        return decimalToTernary(n);
    }

    public static void main(String args[]){
        int n = 9;
        System.out.println(checkPowersOfThree(n));
    }

}
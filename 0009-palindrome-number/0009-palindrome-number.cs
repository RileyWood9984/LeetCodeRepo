public class Solution {
    public bool IsPalindrome(int x) {
        int y=0,z=x;
        while(z>0){
            y=y*10+z%10;
            z/=10;
        }
        return y==x;
    }
}
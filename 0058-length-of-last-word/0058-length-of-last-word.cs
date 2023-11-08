public class Solution {
    public int LengthOfLastWord(string s) {
        string[] sub=s.Split(" ");
        int i=1;
        while(sub[sub.Length-i]==""){
            i++;
        }
        return sub[sub.Length-i].Length;
    }
}
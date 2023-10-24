public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int l=0;
        foreach(int i in nums){
            if(i!=(val)){
                nums[l]=i;
                l++;
            }
        }
        
        return l;
    }
}
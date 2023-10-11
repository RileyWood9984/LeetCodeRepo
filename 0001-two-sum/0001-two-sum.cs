public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int[] sum={0,0};
        for(int i=0;i<nums.Length;i++){
            for(int ii=i+1;ii<nums.Length;ii++){
                if(nums[i]+nums[ii]==target){
                    sum[0]=i;
                    sum[1]=ii;
                    return sum;
                }
            }
        }
        return nums;
    }
}
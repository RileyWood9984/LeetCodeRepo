public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] nums=nums1.Concat(nums2).ToArray();
        int median=0;
        double d=0.0;
        Array.Sort(nums);
        Console.WriteLine( string.Join(", ", nums));
        if(nums.Length%2!=0){
            median=(nums.Length-1)/2;
            return Convert.ToDouble(nums[median]);
        }
        if(nums.Length%2==0){
            median=nums.Length/2;
            return ((Convert.ToDouble(nums[median])+Convert.ToDouble(nums[median-1]))/2);
        }
        return d;
    }
}
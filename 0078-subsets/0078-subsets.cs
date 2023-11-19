public class Solution {
    public IList<IList<int>> Subsets(int[] nums) {
        IList<IList<int>> subset= new List<IList<int>>();
        subset.Add(new List<int>());

        for(int i=0;i<nums.Length;i++){
            int count=subset.Count;
            for(int ii=0;ii<count;ii++){
                var hold=subset[ii].ToList();
                hold.Add(nums[i]);
                subset.Add(hold);
            }
        }
        return subset;
    }
}
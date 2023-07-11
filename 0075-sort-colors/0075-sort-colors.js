/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for(let i=0,ii=1;i<nums.length;i++,ii++){
        while(nums[i]>nums[ii]){
            let h=nums[i];
            let l=nums[ii];
            nums[ii]=h
            nums[i]=l
            i--
            ii--
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result=nums[0];
    let pMin=nums[0];
    let pMax=nums[0];
    for(let i=1;i<nums.length;i++){
        curMax=Math.max(nums[i]*pMax,nums[i],nums[i]*pMin);
        curMin=Math.min(nums[i]*pMin,nums[i],nums[i]*pMax);
        pMax=curMax;
        pMin=curMin;
        result=Math.max(curMax,result);
    }
    return result; 
};
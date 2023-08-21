/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sum=[0,0];
    for(let i=0;i<nums.length;i++){
        for(let ii=i+1;ii<nums.length;ii++)
        if(nums[i]+nums[ii]==target){
            sum=[i,ii]
        }
    }
    return sum
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let hold = 0;
    let output = -Infinity
    for(let i=0;i<nums.length;i++){
        hold=Math.max(hold+nums[i],nums[i]);
        output=Math.max(output,hold);
    }
    return output;
    
};
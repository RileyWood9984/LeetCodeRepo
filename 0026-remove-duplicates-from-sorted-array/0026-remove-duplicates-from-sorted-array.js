/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums.includes(nums[i],i+1)){
            nums.splice(nums.indexOf(nums[i]),1);
            i--;
        }
    }
    nums.sort((a,b)=>a-b)
    return nums.length;
};
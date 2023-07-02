/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums
    let origin = nums.length
    let num = undefined;
    nums.sort()    
    for(let i = 0;i<nums.length;i++){
        console.log("loop:" +i) 
        let t = i;
        let n = 2;
        let x = null;
        while(nums[t]==nums[t+1] && nums.length>1){
            x = i
            nums.splice(x,n)
            if(nums.length===1){
                num=nums
            }
        }
        if(num !== undefined){
            return num
        }
    }
};
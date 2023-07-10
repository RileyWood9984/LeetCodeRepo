/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;
    let ii = 0;
    while(true){
        i=nums[i];
        ii=nums[nums[ii]];
        if(i==ii){
            break;
        }
    }
    i=0;
    while(true){
        i=nums[i];
        ii=nums[ii];
        if(i==ii){
            break;
        }
    }
    return i;
};
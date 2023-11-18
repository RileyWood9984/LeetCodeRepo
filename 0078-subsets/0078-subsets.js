/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subset=[];
    recur([],0);
    
    function recur(set,step){
        subset.push(set);
        for(let i=step;i<nums.length;i++){
            recur([...set,nums[i]],i+1);
        }
    }
    return subset;
};
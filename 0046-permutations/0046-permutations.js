/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let rturn=[];
    let recur= (current,remain)=>{
        if(remain.length===0){
            rturn.push(current);
            return
        }
        for(let i=0;i<remain.length;i++){
            recur([...current,remain[i]],[...remain.slice(0,i),...remain.slice(i+1)]);
        }
    }
    recur([],nums);
    return rturn;
};
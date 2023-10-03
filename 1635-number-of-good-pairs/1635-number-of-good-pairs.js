/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let l=nums.slice();
    let pairs=0;
    for(let i=0;i<nums.length;i++){
        for(let ii=i+1;ii<nums.length;ii++){
            if(l.includes(l[i],ii)){
                ii=(l.indexOf(l[i],ii))
                pairs++;
            }
        }
    }
    return pairs;
};
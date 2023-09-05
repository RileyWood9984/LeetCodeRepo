/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums=new Array(n);
    let holder= undefined;
    for(let i=0;i<n;i++){
        nums[i] = start+2*i;
        holder^=nums[i]
    }
    return holder;
};
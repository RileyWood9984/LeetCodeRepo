/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1)return n;
    let o=1,t=2,r=t;
        for(let i=3;i<=n;i++){
            r=o+t;
            o=t;
            t=r;
        }
        return r;
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let left=0;
    let right=0;
    for(let i=0;i<s.length;i++){
        for(let n of [i,i+1]){
            for(let l=i , r=n;s[l]&&s[l]===s[r];l--,r++){
                [left,right] = (r-l+1) > (right-left+1) ? [l,r] : [left,right];
            }
        }
    }
    return s.substring(left,right+1);
};
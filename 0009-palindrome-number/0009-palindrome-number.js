/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y =(''+x).split('')
    let start=0;
    let end=y.length-1;
    let mid= Math.round((start+end+1)/2)-1
    console.log(start)
    console.log(mid)
    console.log(end)
    while(start<=mid&&end>=mid){
        if(y[start]===y[end]){
            start++;
            end--
        }else{
            return false;
        }
    }
    return true
};
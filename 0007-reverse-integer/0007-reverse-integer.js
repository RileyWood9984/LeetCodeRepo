/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative=false
    if(x<0){
        x*=-1;
        negative=true;
    }
    x+='';
    x=x.split('').reverse().join('');
    if(x>=2**31||x<=(-2)**31)return 0;
    if(negative)return x*-1;
    return x*1;
};
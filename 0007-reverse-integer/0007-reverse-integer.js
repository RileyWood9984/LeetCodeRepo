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
    let hold=x+'';
    hold=hold.split('');
    hold.reverse();
    hold=hold.join('');
    if(hold>=2**31||hold<=(-2)**31)return 0;
    if(negative)return hold*-1;
    return hold*1
};
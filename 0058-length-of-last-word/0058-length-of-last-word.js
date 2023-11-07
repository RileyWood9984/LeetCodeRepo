/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.split(' ');
    while(s[s.length-1]==''){
        s.pop();
    }
    let l=s[s.length-1]
    return l.length;
};
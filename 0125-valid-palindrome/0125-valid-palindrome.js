/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^a-z0-9]/gi,'').split('')
    let z=s
    z=z.reverse()
    z=z.join('')
    s=s.reverse().join('')
    if(z===s){return true};
    return false;
};
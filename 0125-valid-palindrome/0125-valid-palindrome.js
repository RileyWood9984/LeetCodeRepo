/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[^a-z0-9]/gi,'').split(' ').join('').split('')
    let z=s
    z=z.reverse()
    z=z.join('')
    s=s.reverse().join('')
    console.log(z)
    console.log(s)
    if(z===s){return true};
    return false;
};
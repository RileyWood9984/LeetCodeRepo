/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s.includes("Infinity")) return false;
    s*=1;
    return !isNaN(s)
};
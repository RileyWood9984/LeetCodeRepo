/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    let substring = new Set()
    let n = 0
    let m = 0
    for(let i = 0; i < s.length; i++){ 

        while (substring.has(s[i])){
            substring.delete(s[n])
            n++
        }
        substring.add(s[i])
        m = Math.max(m, i-n+1)
    }

        
    console.log(m)
    return m
    
};
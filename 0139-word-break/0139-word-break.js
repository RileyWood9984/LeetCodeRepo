/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, memo = {}) {
    if(!s) return true;
    if(s in memo) return memo[s];
     for(let word of wordDict) {
         if(s.indexOf(word) === 0) {
             if(wordBreak(s.slice(word.length), wordDict, memo)) {
                 memo[s] = true
                return true;
            }
        }
    }
    memo[s] = false
    return false;
}
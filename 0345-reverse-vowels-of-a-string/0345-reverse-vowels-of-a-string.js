/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let index=[];
    let vowel=[];
    s=s.split('')
    for(let i = 0; i<s.length;i++){ 
        if(s[i].toLowerCase()==="a"||s[i].toLowerCase()==="e"||s[i].toLowerCase()==="i"||s[i].toLowerCase()==="o"||s[i].toLowerCase()==="u"){
            vowel.push(s[i])
            index.push(i)
        }    
    }
    let i =vowel.length
    for(let n=0;n<vowel.length;n++){
        s.splice(index[n],1,vowel[--i])
    }

    s=s.join('')
    return s
};
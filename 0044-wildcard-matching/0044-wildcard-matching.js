/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
let sp=0,pp=0,si=-1,pi=-1;
while(sp<s.length){
    if((pp<p.length && s[sp]===p[pp])||p[pp]==='?'){
        sp++,pp++;
    }else if(pp<p.length && p[pp]==='*'){
        pi=pp,si=sp,pp++;
    }else if(pi===-1){
        return false;
    }else{
        pp=pi+1,sp=si+1,si=sp;
    }
}
for(let i=pp;i<p.length;i++){
    if(p[i]!=='*')return false
}
return true;
};
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let simplified=[];
    let directories=path.split('/');
    for(dir of directories){
        if(dir==='.'||!dir){
            continue;
        }else if(dir==='..'){
            if(simplified.length>0) simplified.pop();
        } else simplified.push(dir);
    }
    return '/'+simplified.join('/')
};
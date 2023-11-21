/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===0)return [];
    if(numRows===1)return [[1]];
    let r=[[1]];

    for(let i=1;i<numRows;i++){
        let pr=r[i-1];
        let cr=[1];
        for(let ii=1;ii<i;ii++){
            cr.push(pr[ii-1]+pr[ii])
        }
        cr.push(1);
        r.push(cr);
    }
    return r;
};
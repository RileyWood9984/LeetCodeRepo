/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if(nums===null)return nums;
    function filter(m,array){
        matrix.push([...array])
        for(let i=0;i<m.length;i++){
            if(i==0||m[i]!==m[i-1]){
                array.push(m[i]);
                filter(m.slice(i+1),array);
                array.pop();
            }
        }
    }
    let matrix=[];
    nums.sort((a,b)=>a-b)
    filter(nums,[])
    return matrix;
};
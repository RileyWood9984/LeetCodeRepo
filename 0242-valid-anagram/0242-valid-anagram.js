/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr1=s.split('');
    let arr2=t.split('');
    arr1=arr1.sort();
    arr2=arr2.sort();
    arr1=arr1.join('');
    arr2=arr2.join('');
    console.log(arr1)
    if(arr1!==arr2){
        return false
    }else{
        return true;
    }
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let l = root.left
    let r = root.right
    let v = root.val
    if (root === null){
        return true;
        }
        return mirror(l,r)
};
let mirror = function(l,r){
    if((!l&&r)||(!r&&l)||(l&&r&&l.val !==r.val)){
        return false;
    }
    if(l&&r){
        return mirror(l.left,r.right) && mirror(l.right,r.left);
    }
    return true;
}

    // thought this was a problem with arrays sadly enough this works just not with objects
    // for(let n = 0;n<root.length;n++){
    //     let dbl = n+n;
    //     console.log("dbl")
    //     for(let i = 0;n<dbl;i++){
    //         if(root[n] === root[dbl-i]){
    //             n++
    //         } else{
    //             mirror = false;
    //             break;
    //         }
    //     }
    //     if(!mirror){
    //         break;
    //     }
    // }
    // return mirror;
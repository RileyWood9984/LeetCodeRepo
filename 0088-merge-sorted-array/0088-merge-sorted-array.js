/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(n===0){
        return;
    }
    for(let i = 0; i<n;i++){
        nums1.splice((nums1.length-n)+i,1,nums2[i])  
    }
    for(let i = 1; i < nums1.length;i++){
        let ii =i-1
        while(nums1[ii]>nums1[i]){
            let lesser=nums1[ii]
            let greater=nums1[i]
            nums1[ii]=greater
            nums1[i]=lesser
            i--
            ii--
        }
    }
};
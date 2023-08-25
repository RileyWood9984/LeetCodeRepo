/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums=nums1.slice()
    let median=0
    for(let i=0;i<nums2.length;i++){nums.splice(0,0,nums2[i])}
        nums.sort((a,b) => a-b)
        if(nums.length%2!==0){
            median=(nums.length-1)/2
            console.log(median)
            return nums[median]
        }
        if(nums.length%2==0){
            median=nums.length/2
            console.log(median)
            return ((nums[median]+nums[median-1])/2)
        }
};
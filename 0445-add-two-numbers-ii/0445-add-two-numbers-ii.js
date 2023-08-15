/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let num=[];
    let num2=[];
    while(l1){
        num.push(l1.val);
        l1=l1.next;
    }
    while(l2){
        num2.push(l2.val);
        l2=l2.next;
    }
    let sum=new ListNode(0);
    while(num.length||num2.length){
        let total=0;
        if(num.length)total+=num.pop();
        if(num2.length)total+=num2.pop();
        total+=sum.val;
        sum.val=total%10;
        let start=new ListNode(Math.floor(total/10));
        start.next=sum;
        sum=start;
    }
    return (sum.val===0) ? sum.next : sum;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let dbl = head;
    while(dbl&&dbl.next){
        dbl=dbl.next.next;
        head=head.next;
        if(head===dbl){return true;}
    }
    return false;
};
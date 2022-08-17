/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    if (head == null) {
        return head;
    }
    
    let back = head;
    let fast = head;
    let front = head;
    
    while (front != null && k > 1) {
        fast = fast.next;
        front = front.next;
        k--;
    }
    
    
    while (fast.next != null) {
        back = back.next;
        fast = fast.next;
    }
    
    //swapping 
    let val = front.val;
    front.val = back.val;
    back.val = val;
    
    return head;
    
};
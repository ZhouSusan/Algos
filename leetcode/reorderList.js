/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.

 //traversal to sll to find the middle node 
 //reverse latter half
 //reorder whole sll
 */


var reorderList = function(head) {
    if (head == null || head.next == null || head.next.next == null)     {
        return head;    
    }
        
    //find the middle of sll
    let slow = head;
    let fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //reverse the second part of list in-place
    let prev = null
    let current = slow;//to get the middle 
    let temp = null;
    
    while (current != null) {
        temp = current.next;
        current.next = prev;
        prev = current;
        current = temp; 
    }
    
    //merge two sort list
    let first = head;
    let second = prev; 
    
    while (second.next != null) {
        temp = first.next;
        first.next = second; 
        first = temp;
        
        temp = second.next; 
        second.next = first;
        second = temp;
    }
    
    return head;
};
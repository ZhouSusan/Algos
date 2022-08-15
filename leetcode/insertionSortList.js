/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortInsertion = function (head, node) {
    if (node == null) {
        return head;
    }    
    
    if (head == null || node.val <= head.val) {
        node.next = head;
        return node;
    }
    
    let current = head;
    
    while (current.next && current.next.val < node.val) {
        current = current.next;
    }
    
    //adding a node to sll
    node.next = current.next;
    current.next = node;
    
    return head;
}

var insertionSortList = function(head) {
    let sortedNode = null;
    let current = head; 
    
    while (current != null) {
        let temp = current.next;
        sortedNode = sortInsertion(sortedNode, current);
        current = temp;
    }
    
    return sortedNode;
};
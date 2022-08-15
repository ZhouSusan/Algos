/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prevNode = null;
    let current = head;

    while (current != null) {
        if (current.val == val) {
            if (current == head) {
                head = head.next;
                current = head;
            } else {
                prevNode.next = current.next;
                current = current.next;
            }
        } else {
            prevNode = current;
            current = current.next;
        }
    }
    
    return head;
};
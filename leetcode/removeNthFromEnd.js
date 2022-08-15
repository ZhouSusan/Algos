/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

Initialize two pointers slow && fast, pointing to the head of the sll
Move fast pointer n steps ahead
    -> Move slow && fast pointer one step at time unless fast reaches to the end. Fast pointer will definetly reach to the end before slow
    -> When faster pointer reaches to the end, the slow pointer will be n steps behind it (n steps behind the end of the list)
    -> THen we will remove the node and link it to the next of current node
 */
    var removeNthFromEnd = function(head, n) {
        let slow = head; 
        let fast = head;
        
        //move fast pointer n steps ahead
        for (let i  = 0; i < n; i++) {
            if (fast.next == null) {
                //if n is equal to the number of nodes, delete the head node
                if (i == (n-1)) {
                    head = head.next;
                }
                return head;
            }
            fast = fast.next;
        }
        
        //Loop until we reach to the end, we move slow && fast pointers
        while (fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }
        
        //Delink the nth node from last
        if (slow.next != null) {
            slow.next = slow.next.next;
        }
        return head;
    };
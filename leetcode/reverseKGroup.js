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
 var reverseKGroup = function(head, k) {
    //create a pointer will traverse the head
    let current = head;
    
    //create a counter to determine how manh node we have traversed 
    let count = 0;
    
    //loop until we find either the end of linked liust, or the k+1 node
    while (current != null && count != k) {
        current = current.next;
        count++;
    }
    
    //if we have found the k+1 node 
    if (count == k) {
        //reverseKGroup
        current = reverseKGroup(current, k);//reverse list with k+1 node
        
        //loop through number of node in sub group
        while (count > 0) {
            //flip the nodes to point the opposite direction
            let tmp = head.next;
            head.next = current;
            current = head; 
            head = tmp;
            
            count--;
        }
        
        //swap current head for the reversed one
        head = current;
    }
    return head;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var get_length = function(head) {
    let list_length = 0;
    let current = head; 
    while (current != null) {
        current = current.next;
        list_length++;
    }
    
    return list_length;
}

var getIntersectionNode = function(headA, headB) {
    let list1node = null;
    let list2node = null;
    let list1Length = get_length(headA);
    let list2Length = get_length(headB);
    let length_difference = 0;
    
    if (list1Length >= list2Length) {
        length_difference = list1Length - list2Length;
        list1node = headA;
        list2node = headB;
    } else {
        length_difference = list2Length - list1Length;
        list1node = headB;
        list2node = headA;
    }
    
    while (length_difference > 0) {
        list1node = list1node.next;
        length_difference--;
    }
    
    while (list1node != null) {
        if (list1node == list2node) {
            return list1node;
        }
        
        list1node = list1node.next;
        list2node = list2node.next;
    }
    
    return null;
};
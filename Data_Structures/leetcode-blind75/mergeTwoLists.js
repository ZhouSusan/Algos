/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(0);
    let mergedList = head;
    
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        } else {
            mergedList.next = list2;
            list2 = list2.next;
        }
        mergedList = mergedList.next;
    }
    
    //if only elements in list1 or list2 
    if (list1 == null) {
        mergedList.next = list2;
    } else {
        mergedList.next = list1;
    }
    
    return head.next; 
};

//test cases
console.log(
    mergeTwoLists([1, 2, 4], [1, 3, 4]),//[1, 1, 2, 3, 4, 4]
    mergeTwoLists([], []),//[]
    mergeTwoLists([], [0])//[0]
)
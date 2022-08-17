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
var addTwoNumbers = function(list1, list2) {

    let resultList = new ListNode(0);
    let current = resultList;

    let sum = 0;
    let carry = 0;

    while(list1 != null || list2 != null || sum > 0) {
        if (list1 != null) {
        sum += list1.val;
        list1 = list1.next;
        }

        if (list2 != null) {
        sum += list2.val;
        list2 = list2.next;
        }

        carry = Math.floor(sum/10);
        sum = sum % 10;

        //we add a new node to our solution list, and add it the value of the sum
        current.next = new ListNode(sum);
        current = current.next;

        //move an carry value to sum, setting the carry back to zero
        //when the cycke repeats for the next node, the sum will start with any value that was carried over
        //if the sum is greater zero, if there is a number that is being carried over, then a new node will be made
        sum = carry;
        carry = 0;
    }

    return resultList.next;
};
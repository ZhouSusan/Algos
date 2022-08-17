/*
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

//Merge the sorted list
const sortedMerge = (a, b) => {
    let result = null;

    if (a === null) {
        return b;
    }

    if (b === null) {
        return a;
    }

    //Recursively merge the list by calling the same function with appropriate next value
    if (a.val <= b.val) { 
       result=a; 
       result.next=sortedMerge(a.next, b); 
    } else { 
        result=b;
        result.next=sortedMerge(a, b.next); 
    } 
    return result; 
}; 


//Sort and merge
const sortList = (head) => {
    if (head === null || head.next === null) {
        return head;
    }

    //Break the list from the middle
    let middle = llMiddle(head);
    let middleNext = middle.next;
    middle.next = null;

    //Sort the lower bound
    let left = sortList(head);

    //Sort the upper bound
    let right = sortList(middleNext);

    //return merged sorted list
    return sortedMerge(left, right);
};

//Get the middle of the list 
const llMiddle=(head)=> {
    if (head === null) {
        return head;
    }

    let slow = head,
    fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};
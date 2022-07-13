/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) 
    {
        ListNode head = new ListNode(0);
        ListNode mergerListNode = head;
        
        while (list1 != null && list2 != null) 
        {
            if (list1.val <= list2.val)
            {
                mergerListNode.next = list1;
                list1 = list1.next;
            } 
            else
            {
                mergerListNode.next = list2;
                list2 = list2.next;
            }
            mergerListNode = mergerListNode.next;
        }
        
        if (list1 == null) 
        {
            mergerListNode.next = list2;
        }
        else {
            mergerListNode.next = list1;
        }
        
        return head.next;
    }
}
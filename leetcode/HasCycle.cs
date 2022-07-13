/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        ListNode turtle = head;
        ListNode hare = head;
        
        while (hare != null && hare.next != null) {
            turtle = turtle.next;
            hare = hare.next.next;
            
            if (turtle == hare) {
                return true;
            }
        }
        return false;
    }
}

public class Solution {
    public ListNode detectCycle(ListNode head) {

        ListNode slow = head;
        ListNode fast = head;

        // Step 1: Detect the cycle
        while (fast != null && fast.next != null) {

            slow = slow.next;
            fast = fast.next.next;

            if (slow == fast) {

                // Step 2: Find the cycle entrance
                ListNode p = head;

                while (p != slow) {
                    p = p.next;
                    slow = slow.next;
                }

                return p;
            }
        }

        return null;
    }
}

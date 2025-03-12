package leetcode_2;
import ListNode.ListNode;
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode();
        ListNode head = result;
        boolean carry = false;
        while(l1 != null || l2 != null){
            int sum = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val);
            if(carry){
                sum ++;
                carry = false;
            }

            if(sum > 9){
                carry = true;
                sum %= 10;
            }


            result.val = sum;
            if(l1 != null){
                l1 = l1.next;
            }

            if(l2 != null){
                l2 = l2.next;
            }

            if(l1 != null || l2 != null || carry){
                result.next = new ListNode();
                result = result.next;
            }

        }

        if(carry){
            result.val = 1;
        }

        return head;
    }
}
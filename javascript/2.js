/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode{
    constructor(val){
        this.val = (val===undefined ? 0 : val);
        this.next = new ListNode();    
    }
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let head = result;
    let carry = false;
    while(l1 || l2){
        let sum = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val);
        if(carry){
            sum ++;
            carry = false;
        }
        
        if(sum > 9){
            carry = true
            sum %= 10;
        }


        result.val = sum;
        if(l1){
            l1 = l1.next;
        }

        if(l2){
            l2 = l2.next;
        }

        if(l1 || l2 || carry){
            result.next = new ListNode();
            result = result.next;
        }

    }

    if(carry){
        result.val = 1;
    }

    return head;
};
    /**
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
    var insertGreatestCommonDivisors = function(head) {
        function GCD(a,b){
            if(!b){
                return a;
            }
            return GCD(b, a % b);
        }

        let current_node = head;
        while(current_node.next){
            let gcd = GCD(current_node.val, current_node.next.val);
            let gcd_node = new ListNode(gcd, current_node.next);
            current_node.next = gcd_node;
            current_node = gcd_node.next;
        }
        return head;
    };


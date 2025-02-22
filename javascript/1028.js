/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let stack = [];
    let i = 0;
    while (i < traversal.length) {
        let level = 0;
        while (traversal[i] === "-") {
            level++;
            i++;
        }
        let val = 0;
        while (i < traversal.length && traversal[i] !== "-") {
            val = val * 10 + parseInt(traversal[i]);
            i++;
        }
        let node = new TreeNode(val);
        while (stack.length > level) {
            stack.pop();
        }
        if (stack.length > 0) {
            if (stack[stack.length - 1].left === null) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }
        stack.push(node);
    }
    return stack[0];
};

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

console.log(recoverFromPreorder("1-2--3--4-5--6--7")); // [1,2,5,3,4,6,7]
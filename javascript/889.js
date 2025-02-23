/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let preIndex = 0;
    let postIndex = 0;

    function buildTree(){
        let node = new TreeNode(preorder[preIndex++]);
        if (node.val !== postorder[postIndex]) {
            node.left = buildTree();
        }
        if (node.val !== postorder[postIndex]) {
            node.right = buildTree();
        }
        postIndex++;
        return node;
    }

    return buildTree();
};

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

console.log(constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1])); // [1,2,3,4,5,6,7]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let levelMax = [];

    function bfs(node, level, res) {
        if (!node) return;
        if (res[level] === undefined) res[level] = -Infinity;
        res[level] = Math.max(res[level], node.val);
        bfs(node.left, level + 1, res);
        bfs(node.right, level + 1, res);
    }

    bfs(root, 0, levelMax);

    return levelMax;
};
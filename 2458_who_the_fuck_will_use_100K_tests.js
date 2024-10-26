/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    let maxHeightAfterRemoval = new Array(100001).fill(0);
    let currentMaxHeight = 0;

    // Traverse left to right and update the max height for each node
    const traverseLeftToRight = (node, currentHeight) => {
        if (!node) return;

        // Store the maximum height if this node were removed
        maxHeightAfterRemoval[node.val] = currentMaxHeight;

        // Update the current maximum height
        currentMaxHeight = Math.max(currentMaxHeight, currentHeight);

        // Traverse left subtree first, then right
        traverseLeftToRight(node.left, currentHeight + 1);
        traverseLeftToRight(node.right, currentHeight + 1);
    };

    // Traverse right to left and update the max height for each node
    const traverseRightToLeft = (node, currentHeight) => {
        if (!node) return;

        // Update the maximum height if this node were removed
        maxHeightAfterRemoval[node.val] = Math.max(maxHeightAfterRemoval[node.val], currentMaxHeight);

        // Update the current maximum height
        currentMaxHeight = Math.max(currentMaxHeight, currentHeight);

        // Traverse right subtree first, then left
        traverseRightToLeft(node.right, currentHeight + 1);
        traverseRightToLeft(node.left, currentHeight + 1);
    };

    // Perform the first traversal (left to right)
    traverseLeftToRight(root, 0);
    
    // Reset currentMaxHeight for the second traversal
    currentMaxHeight = 0;
    
    // Perform the second traversal (right to left)
    traverseRightToLeft(root, 0);

    // Process queries and return the result
    return queries.map(q => maxHeightAfterRemoval[q]);
};
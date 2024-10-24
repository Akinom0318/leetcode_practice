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
 * @return {TreeNode}
 */
var replaceValueInTree = function(root) {
    let level_sum = [];

    function traverse(node, level){
        //console.log(node, node.val, node.left, node.right,level)
        if(!node){
            return;
        }
        if(level_sum[level] === undefined){
            level_sum.push(0);
        }
        level_sum[level] += node.val;
        //console.log(level_sum);
        if(node.left){
            traverse(node.left, level + 1);
        }
        if(node.right){
            traverse(node.right, level + 1);
        }
    }

    root.val = 0;
    function cousinNode(node, level){
        if(!node){
            return;
        }
        let current_left = 0;
        let current_right = 0;
        cousinNode(node.left, level + 1);
        cousinNode(node.right, level + 1);
        if(node.left){
            current_left = node.left.val;
        }
        if(node.right){
            current_right = node.right.val;
        }
        //console.log(node, current_left,current_right, level_sum[level + 1]);
        if(node.left){
            node.left.val = level_sum[level + 1] - current_left - current_right;
        }
        if(node.right){
            node.right.val = level_sum[level + 1] - current_left - current_right;
        }
    }


    traverse(root, 0);
    //console.log(level_sum);
    cousinNode(root, 0);
    return root;
};

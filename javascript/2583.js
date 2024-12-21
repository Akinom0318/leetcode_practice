/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode{
    constructor  (val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
 }


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
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


    traverse(root, 0);

    //console.log((level_sum.sort((a,b) => Number(b) - Number(a))));

    return (level_sum.sort((a,b) => Number(b) - Number(a)))[k - 1] === undefined ? -1 : (level_sum.sort((a,b) => Number(b) - Number(a)))[k - 1];
};

let root = [5,8,9,2,1,3,7,4,6];
console.log(kthLargestLevelSum(root));
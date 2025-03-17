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
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    let result = 0;
    let lights = [0,0,0,0,0,0,0,0,0];
    let lightOn = 0;
    function preorderTraversal(root, lights, lightOn){
        let num = root.val - 1;
        if(lights[num] === 0){
            lightOn ++;
            lights[num] = 1;
        }else{
            lights[num] = 0;
            lightOn --;
        }
        if(!root.left && !root.right && lightOn <= 1){
            return result ++;
        }


        if(root.left){
            preorderTraversal(root.left, [...lights], lightOn);
        }

        if(root.right){
            preorderTraversal(root.right, [...lights], lightOn);
        }
    }


    preorderTraversal(root, lights, lightOn);

    return result;
};
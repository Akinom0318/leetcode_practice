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
var reverseOddLevels = function(root) {
    let queue = [root];
    let level = 0;
    while(queue.length) {
        let size = queue.length;
        let temp = [];
        let levelArr = [];
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if (level % 2 === 0) {
                if (node.left) temp.push(node.left.val);
                if (node.right) temp.push(node.right.val);
                levelArr.push(node);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        temp.reverse();
        //console.log(temp);
        for(let i = 0; i < levelArr.length; i++) {
            if(temp.length === 0) break;
            let node = levelArr[i];
            //console.log(temp);
            node.left.val = temp.shift();
            //console.log(temp);
            node.right.val = temp.shift();
        }
        level++;
    }

    return root;
};


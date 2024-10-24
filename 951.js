    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {boolean}
     */
    var flipEquiv = function(root1, root2) {
        let flag = true;
        function traverse(node1, node2){
            if(!node1 || !node2){
                return;
            }        
            console.log(JSON.stringify(node1.left), JSON.stringify(node2.right));
            if(node1.left !== node2.right && node1.right !== node2.left){
                flag = false;
                return;
            }

            if(node1.left){
                traverse(node1.left, node2.right);
            }
            if(node1.right){
                traverse(node1.right, node2.left);
            }
        }

        traverse(root1, root2);

        return flag;
    };
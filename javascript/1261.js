
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


class FindElements{
    constructor(root) {
        this.root = root;
        this.root.val = 0;
        this.hash = new Map();
        this.hash.set(0, true);
        this.recover(this.root);
    }

    recover(node) {
        if(node.left) {
            node.left.val = node.val * 2 + 1;
            this.hash.set(node.left.val, true);
            this.recover(node.left);
        }
        if(node.right) {
            node.right.val = node.val * 2 + 2;
            this.hash.set(node.right.val, true);
            this.recover(node.right);
        }
    }

    find(target) {
        return this.hash.has(target);
    }
}

module.exports = { FindElements, TreeNode };
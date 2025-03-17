package leetcode_1457;
import  TreeNode.*;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int result = 0;

    public int pseudoPalindromicPaths(TreeNode root) {
        int[] lights = new int[9];
        preorderTraversal(root, lights, 0);
        return result;
    }

    private void preorderTraversal(TreeNode root, int[] lights, int lightOn) {
        if (root == null) return;

        int num = root.val - 1;
        if (lights[num] == 0) {
            lightOn++;
            lights[num] = 1;
        } else {
            lights[num] = 0;
            lightOn--;
        }

        if (root.left == null && root.right == null && lightOn <= 1) {
            result++;
        }

        if (root.left != null) {
            preorderTraversal(root.left, lights.clone(), lightOn);
        }
        if (root.right != null) {
            preorderTraversal(root.right, lights.clone(), lightOn);
        }
    }
}

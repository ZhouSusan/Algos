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
var postorderTraversal = function(root, stack = []) {
    if (root == null) {
        return [];
    }
    
    postorderTraversal(root.left, stack);
    postorderTraversal(root.right, stack);
    stack.push(root.val);
    
    return stack;
};
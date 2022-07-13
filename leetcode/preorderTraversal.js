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
var preorderTraversal = function(root, nodeStack = []) {
    if (root == null) {
        return [];
    }
    
    nodeStack.push(root.val);
    preorderTraversal(root.left, nodeStack);
    preorderTraversal(root.right, nodeStack);
    
    return nodeStack;
};
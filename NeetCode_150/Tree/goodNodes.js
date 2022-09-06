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
var goodNodes = function(root) {
    let goodNodeCount = 0;
    
    const dfs = function (node, prevVal) {
        if (node == null) {
            return;
        }
        
        if (node.val >= prevVal) {
            goodNodeCount += 1;
        }
        
        if (node.left !== null || node.right !== null) {
            dfs(node.left, Math.max(node.val, prevVal));
            dfs(node.right, Math.max(node.val, prevVal));
        }
    }
    
    dfs(root, root.val);
    return goodNodeCount;
};
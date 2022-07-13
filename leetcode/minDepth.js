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
var minDepth = function(root) {
    let depthCalculator = function (root) {
        if (root == null) {
            return 0; 
        }
        let left = depthCalculator(root.left)
        let right = depthCalculator(root.right)
        if (left + right == 0) {
            return 1
        }
        if (left == 0) {
            return right +1;
        } else if (right == 0) {
            return left +1
        }
        return Math.min(left,right) +1
        
    }
    
    return depthCalculator(root);
};
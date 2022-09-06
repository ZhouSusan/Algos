/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const sameTree= function (node1, node2) {
    if (node1 == null && node2 == null) {
        return true;
    }

    //make sure both nodes are not empty + they have the same val by call sameTree to check the right and elft values
    if (node1 == null || node2 == null || node1.val !== node2.val) {
        return false;
    }

    //else if one of the tree is empty, then return false
    return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
} 

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (subRoot == null) {
        return true;
    }
    
    if(root == null) {
        return false;
    }
    
    const dfs = function(node) {
        if (node == null) {
            return false; 
        }
        
        if (sameTree(node, subRoot)) {
            return true;
        }
        
        return dfs(node.left) || dfs(node.right);
    } 
    
    return dfs(root);
};
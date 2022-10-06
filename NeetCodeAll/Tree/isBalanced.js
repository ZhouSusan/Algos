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
 * @return {boolean}
 */
var isBalanced = function(root) {

    //this is a function that will return a bool and height of tree
    const dfs = function(root) {
        if (root == null) {
            return [true, 0];
        }
        
        let left = dfs(root.left);
        let right = dfs(root.right);
        
        //to find out if the root node is balance, we take the absolute value of the left and right tree 
        balance = left[0] == true && right[0] == true && Math.abs(left[1] - right[1]) <= 1;

    //the 1 comes from the root of that sub tree
    return [balance, 1 + Math.max(left[1], right[1])];
    }
    
    return dfs(root)[0];
};
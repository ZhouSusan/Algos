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

    //helper function 
    var dfs = function(root) {
        if (!root) {
            return [true, 0];
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        let balanced;

        if (left[0] == true && right[0] == true && Math.abs(left[1] - right[1]) <= 1) {
            balanced = true;
        } else {
            balanced = false;
        }
        return [balanced, 1+ Math.max(left[1], right[1])];
    } 
    return dfs(root)[0]
};

//test cases

console.log(
    isBalanced([3,9,20,null,null,15,7]),//true
    isBalanced([1,2,2,3,3,null,null,4,4]),//true
    isBalanced([2]),//false
    isBalanced([]),//true
    isBalanced([4, 5, 6, null, null]),//true
    isBalanced([4, 3, null, 2, 1]),//false
);
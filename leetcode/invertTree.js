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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null) {
        return null;
    }

    //swap the children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

//testcases
console.log(
    invertTree([4,2,7,1,3,6,9]),// [4,7,2,9,6,3,1]
    invertTree([2,1,3]),//[2,3,1],
    invertTree([]),//[]
)
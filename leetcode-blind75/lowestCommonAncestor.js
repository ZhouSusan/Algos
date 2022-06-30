/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    let current = root;

    while (current != null) {
        if (p.val > current.val && q.val > current.val) {
            current = current.right;
        } else if (p.val < current.val && q.val < current.val) {
            current = current.left;
        } else {
            return current;
        }
    };
};

//testcase 

console.log(
    lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8),//6
    lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4),//2
    lowestCommonAncestor([2, 1], p = 2, q = 1)//2
)
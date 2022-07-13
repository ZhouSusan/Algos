/* A valid binary search tree (BST) has ALL left with values less than the parent node, 
and ALL right children with values greater than the parent node.

To verify if a tree is valid binary search tree:

-Define the min & max value the current node can have
-If a node's value is not within bounds, return false
-Recusively validate the node's left children, with the max bound set to node's value
-Recusively validate the node's right children, with min bound set to the node's value 
*/

class TreeNode{
    constructor (val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 

//we going to use Depth-first search
let dfs = function(root, min, max) {
    if (root == null) {
        return true;
    }

    if (min != null && root.val <= min || max != null && root.val >= max) {
        return false;
    }

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
}

const isBstValid = function (root) {
    if (root == null) {
        return true;
    }

    return dfs(root, null, null);
}


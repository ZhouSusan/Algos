/* Finding Binary Tree Max Depth

The maxium depth of a binary tree is the number of nodes from the root down to the furtherest leaf node. 

-If the node is null, return 0
    -> else we add 1 to our current depth as we transversed a level inner 

-> we recursively caluclate the depth of the children's node and return the max sum between the left and right's node
*/

class TreeNode {
    constructor (val, left, right) {
        this.val = val; 
        this.left = left;
        this.right = right;
    }
}

//helper function
const getHeight = function (node) {
    if (node == null) {
        return 0;
    }

    return Math.max(1+ getHeight(node.left), 1 + getHeight(node.right));
}

const maxDepth = function (root) {
    if (root == null) {
        return 0;
    }

    return getHeight(root);
} 
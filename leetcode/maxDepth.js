/**
 * @param {TreeNode} root
 * @return {number}
 */

const getHeight = function (node) {
    if (node == null) {
        return 0;
    }

    return Math.max(1+ getHeight(node.left), 1 + getHeight(node.right));
}

var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }

    return getHeight(root);
};
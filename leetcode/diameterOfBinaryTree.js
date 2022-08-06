/*
-For each node, find the max of each leftDepth & rightDepth
-For each node, set the diameter to leftTreeDiameter + rightTreeDiameter
-Return the max of all diameters

EC: longest path might not start from the top node
EC: if the root is null, then return 0
*/

const diameterOfBinaryTree = function(root) {
    if (root == null) {
        return 0;
    }

    const  depth = function (root) {
        if (root == null) {
            return 0;
        }

        return Math.max(depth(root.left), depth(root.right)) + 1;
    }

    let diameter = depth(root.left) + depth(root.right);
    let leftDiameter =  depth(root.left);
    let rightDiameter = depth(root.right);
    return Math.max(diameter, Math.max(leftDiameter, rightDiameter));
}
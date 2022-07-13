//Defintiion of a Binary Tree Node 

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/*
Inorder traveral
-A recursive algo is the easiest way to get started with binary tree inorder traversal. 

-> If the node is empty do nothing
    -> recusrively call the function on the node's left child
        -> then do some operation on the node after traversing through all the left children
            -> Our current node is the leftest node

-> Then we call the function on the right node 

InOrder algorith traverse the tree nodes from left to mid, to right. 
*/

const inorder = function(root) {
    if (root == null) {
        return null;
    }

    let nodes = [];

    inorder(root.left);
    nodes.push(root.val);
    inorder(root.right);

    return nodes;
};

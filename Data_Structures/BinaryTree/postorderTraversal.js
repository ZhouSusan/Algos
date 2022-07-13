/*
Postorder traversal 

-If the node is empty, then return null;

-recursively call the function on the node's left child
    ->then call the function on the node's right child

->Then, finally do some operations on the nodes

Postorder visits the tree nodes from left, to right to mid. 
*/



class TreeNode {
    constructor(val, left, right) {
        the.val = val;
        this.left = left;
        this.right = right;
    }
}

const postOrder = function (root) {
    if (root == null) {
        return null;
    }

    const nodesStack = [];

    postOrder(root.left);
    postOrder(root.right);
    nodesStack.push(root.val);

    return nodesStack;
}
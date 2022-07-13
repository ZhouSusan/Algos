/*
Preorder traversal

-if the node is empty, return null
-> create a stack, and add each node's val into the stack
->recursively call funcion on the node left child
-> then, after you reach the leftest node, call the function on the right child of node
-> return stack variable 

Peroder visit mid, left, right;
*/

class TreeNode {
    constructor (val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const preorder = function (root) {
    if (root == null) {
        return null;
    }

    let nodeStack = [];

    nodeStack.push(root.val);
    preorder(root.left);
    preorder(root.right);

    return nodeStack;
}


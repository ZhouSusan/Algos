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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let n = 0;
    let stack = [];
    let current = root; //points to the node that this is currently at
    
    while (current !== null || stack.length !== 0) {
        //we are going to visit every node in the left before root
        while (current !== null) {
                        //after we process current.left, we still go back up to current(root), so we add current to stack 
            stack.push(current);
            current = current.left;
        }
        //we are popping the most last element in our stack
        current = stack.pop();
        //we increment node by one, each node that is visited 
        n += 1;
        
        if (n == k) {
            return current.val;
        }
        current = current?.right;
    }
};
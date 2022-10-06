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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) {
        return [];    
    }

    let result = [];
    let queue = [root];

    while (queue.length) {
        const size = queue.length;
        let temp = [];
        
        for (let i = 0; i < size; i++) {
            const subTree = queue.shift();
            temp.push(subTree.val);
            if (subTree.left !== null) {
                queue.push(subTree.left);
            }
            if(subTree.right !== null) {
                queue.push(subTree.right);
            }
        }
        result.push(temp);
    }
    return result;
};
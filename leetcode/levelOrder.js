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
 * EC: if root is null, return []

    Approach
    1. initiate a new queue and add the the root node to the queue
    2. create a loop, as long there are items in the queue
        ->remove the first element from top of the queue (this will be the current node)
    3. check if the node has any children and add it to the que 
*/
var levelOrder = function(root) {
    if (root == null) {
        return [];
    }
    let treeArr = [];
    let queue = [root];

    while (queue.length != 0) {
        let subarr = []    
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            let node = queue.pop()
            subarr.push(node.val)
            if (node.left) {
                queue.unshift(node.left)
            };
            if (node.right) {
                queue.unshift(node.right)
            };
        }
        treeArr.push(subarr)
    }
    return treeArr;
};
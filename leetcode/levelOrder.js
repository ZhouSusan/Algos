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

/*We are going to traversal the level from the tree, left to right, and add in the subLevel, add the node's value from left to right in a separate list 
We will use Breath First Search on our tree using queue(adding elements to the right and popping elements from the left)
T: O(n)- visting each node in tree once
S: O(n)- becuase our queue can have up to o(n/2) elements can be rounded to O(n) with Breath First Search
*/
var levelOrder = function(root) {
    if (root == null)  {
        return [];
    }
    let queue = [];
    let result = [];

    queue.push(root);
    
    //We are going to fun bsf in a while loop
    //while the q is not empty 
    while (queue.length != 0) {
        //this is to loop through one tree level at a time, add the nodes into a sublist and then adding to that list 
        queueLength = queue.length;
        let level = [];
        for (let i = 0; i < queueLength; i++) {
            //pop nodes from the left of the queue
            let node = queue.shift();
            //it is possible that the node is null, 
            if (node != null) {
                //if node is not null, add the node to level(array) and add the children to the queue if the children are not null. In the next iteration, it will check if the children node's are not nullble, before adding to to the level array 
                level.push(node.val);
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
        }
        //After we go through each level we are going to add that subArr to our level array
        result.push(level);
    }
    return result; 
};
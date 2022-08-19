/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}

Use a hashMap - we are going to map our old node value to our new node value 
1) Create a copy of one and look if it has adjacent neighbors
2) After a creating a clone for one, and now we are mapping the old one to new node 1
3) We are going to go to the adjacent neighbors, and make a clone of node 2 and look at 2 neighbors 
4) At node two, we see that 2 is connected to one, and it already exist in the hashMap. We then connected it with 1. Make that node bidirectional 
5) So we go to the other adjacent neighbor that is not clone yet 
Repeat these steps until all nodes and neighbors are clone 

6) Then we pop back, from the last node we cloned, backed to the first one to check to we are connected of neighbors

O(n) =Edges + Nodes (making a clone of each)
*/
var cloneGraph = function(node) {
    //Use HashMap to keep track fo the nodes we already copied
    let vistied = {};
    
    /*Deep First Search(dfs) to copy the graph 
    we are creating a copy of the nodes and its neighbors with a      recursive call and append that list of neighbors for each copy neighbor  
    */
    var dfs = function(node) {
        
        if(node == null) {
            return node;
        }
        //if we seen the node, return this node 
        if (vistied[node.val] !=  null) {
            //return new node value
            return vistied[node.val];
        } 
        
        //create a base for a copied node and add it to our hashMap
        let copy = new Node(node.val);
        vistied[node.val] = copy;
            
        //we are calling dfs() passing in a node, and cloning it. Then we check and clone the node's neighbors. The dfs function returns the copy of that node we just created in the hashMap. We append all the neighbors(list of neighbors) to the copy node. 
        node.neighbors.forEach(neig =>           copy.neighbors.push(dfs(neig)));
        return copy;
    }
    return dfs(node);
};
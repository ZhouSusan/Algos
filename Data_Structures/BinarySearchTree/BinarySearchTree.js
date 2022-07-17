class Node 
{
    constrcutor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        //if the root is null
        if(this.root == null) {
            this.root = newNode;
        }

        //find the correct postion in the tree and add to the node
        this.insertNode(this.root, newNode);
    }

        //create a helper function- insert a node in a tree and it moves over the tree and find the location to insert a node with given data
        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (newNode.data < node.val) {
                    if (node.left == null) {
                        node.left = newNode;
                    } else {
                        this.insertNode(node.left, newNode);
                    }
                }
            } else {
                if (node.right == null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }

        remove(data) {
            //this is to re-inialized with root of modified tree. 
            this.root = this.removeNode(this.root, data);
        }

        removeNode(node, val) {
            if (node == null) {
                return null;
            } else if (val < node.data) { //if data is less than root, we move to left subtree
                node.left = removeNode(node.left, val);
            } else if (val > node.data) { //if data is greater than root data
                node.right = removeNode(node.right, val);
            } else { //if data is similar to the root's data, then delete this node
                //deleting node with no children
                if (node.left == null && node.right == null) {
                    node == null;
                    return node;
                }

                //deleting a node with one children 
                if (node.left == null) {
                    node = node.right;
                    return node;
                } else if (node.right == null) {
                    node = node.left;
                    return node;
                }
            }

            // Deleting node with two children minimum node of the right subtree is stored in aux
            //We find the node with minimium value in its right subtree and replace this with a min value node and removed the the min valued noded from the tree   
            let aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }

        findMinNode(node) {
            //if left of a nide is null then it must be min node;
            if (node.left == null) {
                return node;
            }
            return this.findMinNode(node.left);
        }

        getRootNode() {
            return this.root;
        }

        search(node, data) {
            if (node == null) {
                return null;
            } else if (data < node.data) {
                return this.search(node.left, data);
            } else if (data > node.data) {
                return this.search(node.right, data);
            } else {
                return node;
            }
        }
}
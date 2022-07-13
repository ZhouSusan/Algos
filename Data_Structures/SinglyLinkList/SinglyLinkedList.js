class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = head;
        this.length = 0;
    }

    //adds an element at the end of list
    add(val) {

        let newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
        }

        //store current node
        let current = this.head;

        while(current.next != null) {
            current = current.next;
        }

        current.next = newNode;

        //increase it size by one
        this.size += 1;
    }

    //It inserts an element at the given index in a list. 
    insertAt(val, index) {
        if (this.head == null || index < 0 || index > this.size) {
            return this; 
        }

        let addMe = new Node();
        if (index == 0) {
            this.head.next = addMe;
            addMe = this.head;
        }

        let current = this.head;
        let count = 0;
        let prev = null;

        while (count < index) {
            count++;
            prev = current;
            current = current.next;
        }

        prev.next = addMe;
        addMe.next = current;

        this.size += 1;
    }

    /*removes a value from specified location
    
    In order to remove an element from the list we consider three conditions: 

    If the index is 0 then we remove the head and make the next node head of the list
    if the index is size – 1 then we remove the last element from the list and make prev the last element
    if it’s in between 0 to size – 1 we remove the element by using prev and the current node
    */
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head; 
        let prev = null;
        let count = 0;

        if (index == 0) {
            this.head = current.next;    
        }

        while (count < index) {
            count += 1;
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
        this.size -= 1;

        return current.val;
    }

    //removes val from the list, and returns removed val or -1

    remove(val) {
        if (this.head == null) {
            return -1;
        }

        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.val == val) {
                //if val is in the beginning of the list
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size -=1;
                return current.val;
            }

            prev = current;
            current =current.next;
        }
        return -1;
    } 

    //helper function 

    //finds the index of the element
    indexOf(val) {
        if (this.head == null) {
            return -1;
        }
        let current = this.head;
        let index = 0;

        while (current != null) {
            if (current.val == val) {
                return index;
            }

            index += 1;
            current = current.next;
        }

        return -1;
    }

    //returns a boolean value;
    isEmpty() {
        return this.size == 0;
    }
}
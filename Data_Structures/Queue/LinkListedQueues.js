/*
In order to maintain an O(1) enquene time complexity like .push with an array
We add a tail to our link list so we can go directly to the last node.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next - null;
    }
}

class LinkedListQuenes {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Boolean} Indicates if the list is empty.
   */

    isEmpty() {
        return this.head === null;
    }

    /**
   * Adds a given val to the back of the queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Any} val
   * @returns {Number} The new size of the queue.
   */

    enqueue(val) {

        const newTail = new Node(val);

        if (this.isEmpty()) {
            this.head = this.newTail;
            this.tail = this.newTail;
        } else {
            this.tail.next = this.newTail;
            this.tail = this.newTail;
        }
    return ++this.size;
    }

    /**
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Any} The removed item.
   */
    dequeue() {
        if (this.isEmpty()) {
            return null;
        } 

        const firstNode = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }
        --this.size;
        return firstNode.data;
    }

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Any} The first item.
   */
    front() {
        return this.isEmpty() ? null : this.head.data;
    }
}
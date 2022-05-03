/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */

class Stack {
    /**
     * @returns {Stack} (implict return)
     */

    constructor () {
        this.items = [];
    }


    /**
   * Returns the size of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */

    size() {
        return this.length;
    }
}

class StackNode {
    constructor (data) {
        this.data = data;
        this. next = null;
    }       
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }
}
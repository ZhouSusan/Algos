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
   * Removes the top / last item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
    pop() {
        return this.items.pop();
    }

    /**
   * Retrieves the top / last item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Any} The top / last item of this stack.
   */

    peek() {
        return this.items[items.length-1];
    }


    /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    isEmpty() {
        return this.length === 0 ? true : false;
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
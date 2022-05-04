class Queue {
    constructor(items = []) {
        this.items = items;
    }

    /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {Any} item The new item to add to the back.
   * @returns {Number} The new size of this queue.
   */
    enqueue(item) {
        if (this.items.isEmpty()) {
            return 0;
        }

        this.items.push(item);
        return this.items.size();
    }

    /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Any} The first item or undefined if empty.
   */
    front() {
        if (this.items.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {Any} The first item or undefined if empty.
   */
    dequeue() {
        if (this.items.isEmpty()) {
            return undefined;
        }

        const first = this.items.shift();
        return first;
    }   

        /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Boolean}
   */
    isEmpty() {
        return this.items.length === 0 ? true : false;
    }

    /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {Number} The length.
   */
    size() {
        return this.items.length;
    }
}

class stackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }
}
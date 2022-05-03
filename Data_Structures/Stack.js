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
}
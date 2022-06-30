class MinStack {
    constructor() {
        this.stack = [];
        this.pogoStack = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.pogoStack.length == 0 || this.pogoStack[this.pogoStack.length - 1] >= val) {
            this.pogoStack.push(val);
        }
    }
    /**
     * @return {void}
     */
    pop() {
        let removed = this.stack.pop();
        if (removed == this.pogoStack[this.pogoStack.length - 1]) {
            this.pogoStack.pop();
        }

    }
    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }
    /**
     * @return {number}
     */
    getMin() {
        return this.pogoStack[this.pogoStack.length - 1];
    }
}




/** 
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(val)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */
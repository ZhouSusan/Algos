class QueueUsingStack{
    constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	enqueue(data) {
		this.stack1.push(data);
	}
	
	// Uses the default length method to check if the queue is empty
	isEmpty() {
		if (this.stack1.length + this.stack2.length === 0)
        {
            return true;
        }
        return false;
	}

	dequeue() {
		if (this.isEmpty()) {
			return -1;
		}

		if (this.stack2.length == 0) {
			// Pop values from stack1 and push them
			// onto stack2  
			while (this.stack1.length != 0) {
				this.stack2.push(this.stack1.pop());
			}
		}
		return this.stack2.pop();
	}
}
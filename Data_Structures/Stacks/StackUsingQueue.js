class StackUsingQueue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    
    push(data){

        if (this.queue1.length !== 0) {
        this.queue1.push(data);
            for (let i = 0; i < this.queue2.length; i++) {
                this.queue1.push(this.queue2.pop());
            }
        }//if queue2 is empty 
        else {
            this.queue2.push(data);

            if (this.queue1.length !== 0) {
                for (let j = 0; j < this.queue1.length; j++) {
                    this.queue2.push(this.queue1.pop());
                }
            }
        }
    }

    isEmpty() {
        if (this.queue1.length + this.queue2.length === 0) {
            return true;
        }
        return false;
    }

    pop() {
    if (this.isEmpty()) {
        return -1;
    }
        if (this.queue1.length !== 0) {
            return this.queue1.pop();
        } else {
            return this.queue2.pop();
        }
    }
}
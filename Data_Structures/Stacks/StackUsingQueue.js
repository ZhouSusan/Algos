class StackUsingQueue {

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    };

    push(data){
        this.queue1.push(data);
        return data;
    }
    
    isEmpty() {
        if (this.queue1.length + this.queue2.length === 0) {
            return false;
        } 
    }
    
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        let first = this.queue2.push(this.queue1.shift());
        return first;
    }
}
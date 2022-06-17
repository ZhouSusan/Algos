class MyStack{
    constructor() {
        this.q1 = [];//push
        this.q2 = [];//pop
    }

    /** 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if(this.q1.length != 0) {
            this.q1.push(x);
        } else {
            this.q2.push(x);
        }
    };

    /**
     * @return {number}
     */
    pop() {
        if (this.empty()) {
            return null
        }
        
        if (this.q1.length != 0) {
            while (this.q1.length > 1) {
                let val = this.q1.shift();
                this.q2.push(val);
            }
            
            return this.q1.shift();
        } else {
            return this.q2.pop();
        }
    };

    /**
     * @return {number}
     */
    top() {
        if (this.empty()) {
            return null;
        }
        if (this.q1.length != 0) {
            return this.q1[this.q1.length -1];
        } else {
            return this.q2[this.q2.length - 1];
        }
    };

    /**
     * @return {boolean}
     */
    empty() {
        return (!this.q1.length && !this.q2.length) ? true : false; 
    };
};    
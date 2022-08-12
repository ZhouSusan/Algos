class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.size = 0;
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index > this.size) {
        return -1;
    }
    
    let current = this.head;
    
    for (let i = 0; i < index; i++) {
        current = current.next;    
    }
    
    return current.val; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newHead = new Node(val);
    newHead.next = this.head; 
    this.head = newHead;
    this.size++; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    
    if (this.head == null) {
        this.head = newNode;
        this.size += 1;
    }
    
    let current = this.head;
    
    while (current.next != null) {
        current = current.next;
    }
    
    current.next = newNode;
    this.size += 1; 
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) {
        return;
    }
    
    let newNode = new Node(val);
    
    if (this.head == null) {
        this.addAtHead(val);
        return;
    }
    
    if (index == this.size) {
        this.addAtTail(val);
        return;
    }
    
    let current = this.head; 
    for (let i = 0; i < index-1; i++) {
        current = current.next;
    }
    
    let preIndexth = current.next;
    current.next = newNode;
    newNode.next = preIndexth;
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index > this.size) {
        return;
    }
    
    if (index == 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    let current = this.head;
    for(let i = 0; i < index-1; i++){
        
        current= current.next;
        console.log(current.val);
    }
    
    current.next = current.next.next;
    this.size-=1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
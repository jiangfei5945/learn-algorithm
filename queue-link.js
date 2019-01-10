const {
  Node
} = require('./LinkedList');

class QueueLink {
  constructor() {
    this.head = this.tail = null;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
    return true;
  }

  dequeue() {
    if (!this.head) {
      return null;
    } else {
      const node = this.head;
      this.head = this.head.next;
      return node;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let queue = new QueueLink();
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(5);

queue.display();

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.display();

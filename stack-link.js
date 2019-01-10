const {
  Node
} = require('./LinkedList');

class StackLink {
  constructor() {
    this.top = null;
  }

  push(value) {
    if (!this.top) {
      this.top = new Node(value);
      return;
    }
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top) {
      let node = this.top;
      this.top = this.top.next;
      return node;
    }
  }

  display() {
    let current = this.top;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let stack = new StackLink();
stack.push(2);
stack.push(1);
stack.push(5);

stack.display();

console.log(stack.pop());
stack.display();


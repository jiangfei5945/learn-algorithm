const Node = function (data) {
  this.data = data;
  this.next = null;
};

const buildLinkedList = function (data) {
  let head, tail;

  data.forEach((item, index) => {
    if (index === 0) {
      head = tail = new Node(item);
    } else {
      tail.next = new Node(item);
      tail = tail.next;
    }
  });
  return head;
}

module.exports = {
  Node,
  buildLinkedList
};

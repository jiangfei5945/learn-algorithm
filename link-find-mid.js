const {
  buildLinkedList
} = require('./LinkedList');

function findMiddle(link) {
  let fast = slow = link;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

let middleNode = findMiddle(buildLinkedList([1, 2, 3, 7, 9, 4, 5, 6, 0]));

console.log(middleNode.data);

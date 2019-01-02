const {
  buildLinkedList
} = require('./LinkedList');

function merge(l1, l2) {
  let linkResult;
  let l1Link = l1;
  let l2Link = l2;
  if (l1Link.data < l2Link.data) {
    linkResult = l1Link;
    l1Link = l1Link.next;
  } else {
    linkResult = l2Link;
    l2Link = l2Link.next;
  }
  let currentNode = linkResult;
  while (l1Link.next && l2Link.next) {
    if (l1Link.data < l2Link.data) {
      currentNode.next = l1Link;
      l1Link = l1Link.next;
    } else {
      currentNode.next = l2Link;
      l2Link = l2Link.next;
    }
    currentNode = currentNode.next;
  }
  if (l1Link.next) {
    currentNode.next = l1Link;
  } else {
    currentNode.next = l2Link;
  }
  return linkResult;
}

let l1 = buildLinkedList([1, 3, 4, 6]);
let l2 = buildLinkedList([2, 3, 5, 8]);
let mergedLink = merge(l1, l2);

while (mergedLink) {
  console.log(mergedLink.data);
  mergedLink = mergedLink.next;
}

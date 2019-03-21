const {
  buildLinkedList
} = require('./LinkedList');

function merge(l1, l2) {
  if (!listA) {
    return listB
  }
  if (!listB) {
    return listA
  }

  let a = listA
  let b = listB
  let resultList = undefined
  if (a.element < b.element) {
    resultList = a
    a = a.next
  } else {
    resultList = b
    b = b.next
  }
  let currentNode = resultList
  while (a !== null && b !== null) {
    if (a.element < b.element) {
      currentNode.next = a
      a = a.next
    } else {
      currentNode.next = b
      b = b.next
    }
    currentNode = currentNode.next
  }

  if (a != null) {
    currentNode.next = a
  } else {
    currentNode.next = b
  }
  return resultList
}

let l1 = buildLinkedList([1, 3, 4, 6]);
let l2 = buildLinkedList([2, 3, 5, 8]);
let mergedLink = merge(l1, l2);

while (mergedLink) {
  console.log(mergedLink.data);
  mergedLink = mergedLink.next;
}

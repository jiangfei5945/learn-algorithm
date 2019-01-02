const {
  buildLinkedList
} = require('./LinkedList');

function reverseLink(link) {
  let newLink, current;
  while (link) {
    newLink = link;
    link = link.next;
    newLink.next = current;
    current = newLink;
  }
  return newLink;
}

let reversedLink = reverseLink(buildLinkedList([1, 2, 3, 4, 5, 6]));

while (reversedLink) {
  console.log(reversedLink.data);
  reversedLink = reversedLink.next;
}

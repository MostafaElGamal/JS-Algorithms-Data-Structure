console.clear();
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    this.checkLength();
    return current;
  }
  shift() {
    if (!this.head) return null;
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    this.checkLength();
    return oldHead;
  }
  unshifting(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var current = this.head;
    var counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var selectedNode = this.get(index);
    if (selectedNode) {
      selectedNode.val = val;
      return selectedNode;
    }

    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshifting(val);

    var newNode = new Node(val);
    var prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index == this.length - 1) return this.pop();
    if (index == 0) return this.shift();

    const prevNode = this.get(index - 1);
    const selectNode = prevNode.next;

    prevNode.next = selectNode.next;
    this.length--;
    return this;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next = null;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  checkLength() {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  print() {
    var arr = [];
    var node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");

list.reverse();
list.print();
console.log(list);

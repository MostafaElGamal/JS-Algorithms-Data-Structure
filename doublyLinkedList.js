console.clear();
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var oldTail = this.tail;
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      var count = this.length - 1;
      var count = 0;
      var current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var currentNode = this.get(index);
    if (currentNode != null) {
      currentNode.val = val;
      return currentNode;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index == this.length) return this.push(val);
    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    // newNode.prev = beforeNode.prev;
    // newNode.next = beforeNode;
    // beforeNode.prev = newNode;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.shift();
    if (index == this.length) return this.pop();
    var curNode = this.get(index);
    var prevNode = curNode.prev;
    var nextNode = curNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    curNode.next = null;
    curNode.prev = null;
    this.length--;
    return true;
  }
  print() {
    var arr = [];
    var count = 0;
    var current = this.head;
    while (count != this.length) {
      arr.push(current.val);
      current = current.next;
      count++;
    }
    console.log(arr);
  }
}

var dobulyLinkedList = new DoublyLinkedList();

dobulyLinkedList.push("1");
dobulyLinkedList.push("2");
dobulyLinkedList.push("3");

dobulyLinkedList.remove(1);

dobulyLinkedList.print();

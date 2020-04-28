console.clear();

// var stack = [];

// stack.push("Google");
// stack.push("instagram");
// stack.push("youtube");

// stack.pop();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    var temp = this.first;
    this.size--;

    return temp.val;
  }
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

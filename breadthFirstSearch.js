console.clear();

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }

  BFS() {
    var data, queue, node;
    data = [];
    queue = [];
    node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data, current;
    data = [];
    current = this.root;
    function helper(node) {
      data.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(current);
    return data;
  }
  DFSPostOrder() {
    var data, current;
    data = [];
    current = this.root;
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node.value);
    }
    helper(current);
    return data;
  }
  DFSInOrder() {
    var data, current;
    data = [];
    current = this.root;
    function helper(node) {
      if (node.left) helper(node.left);
      data.push(node.value);
      if (node.right) helper(node.right);
    }
    helper(current);
    return data;
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(2);
tree.insert(13);
tree.insert(15);
tree.insert(20);
tree.insert(1);

console.log(tree.DFSInOrder());

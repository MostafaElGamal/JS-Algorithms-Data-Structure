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
  // My Solution
  //   find(value) {
  //     if (this.root === null) return false;
  //     var current = this.root;
  //     var found = false;
  //     while (current && !found) {
  //       if (value === current.value) return current;
  //       if (value <= current.value) {
  //         if (value === current.value) {
  //           return this;
  //         } else {
  //           current = current.left;
  //         }
  //       } else {
  //         if (value === current.value) {
  //           return this;
  //         } else {
  //           current = current.right;
  //         }
  //       }
  //     }
  //   }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(2);
tree.insert(13);
tree.insert(15);
tree.insert(20);
tree.insert(1);

var find = tree.find(1);
console.log(find);
// console.log(tree);

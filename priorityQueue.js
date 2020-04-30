console.clear();
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    var index, parentIndex;
    index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    var idx;
    idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChild, leftChildIdx, rightChild, rightChildIdx, swap;

      leftChildIdx = 2 * idx + 1;
      rightChildIdx = 2 * idx + 2;
      swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChild;
        }
      }
      if (swap == null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("common Cold", 1);
priorityQueue.enqueue("gunshot", 5);
priorityQueue.enqueue("fever", 2);

priorityQueue.dequeue();
console.log(priorityQueue.values);

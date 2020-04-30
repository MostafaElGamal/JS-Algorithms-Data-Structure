console.clear();

class MaxBinaryHead {
  constructor() {
    this.values = [41, 39, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    var index, parentIndex;
    index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

var maxHeap = new MaxBinaryHead();
maxHeap.insert(55);
maxHeap.insert(35);
maxHeap.insert(1);

maxHeap.extractMax();
console.log(maxHeap.values);

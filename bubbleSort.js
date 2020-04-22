console.clear();

function bubbleSort(arr) {
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(arr);
}
var arr = [5, 3, 4, 1, 2];

// 1. sort the arr
// 2. check every two elements togther and swap between them
// 3. return the sorted array
bubbleSort(arr);

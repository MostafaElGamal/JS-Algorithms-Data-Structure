console.clear();

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minEle = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minEle]) {
        minEle = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minEle];
    arr[minEle] = temp;
  }

  console.log(arr);
}

selectionSort([5, 4, 3, 2, 1]);

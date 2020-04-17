console.clear();
// Write a fucntion called sumzero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array thath includes both values that sum to zero or undefined if a pair does not exist

// Naive solution O(n^2)
function sumZero(arr) {
  for (const firstIterator of arr) {
    for (const secondIterator of arr.slice(1)) {
      if (firstIterator + secondIterator === 0) {
        return [firstIterator, secondIterator];
      }
    }
  }
}

// Multiple Pointers pattern

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// ==============================================================
// Challenge
// ==============================================================

//  Implement a function called countUniqueValues which accepts a sorted array ,
// and counts the unique values in the Array.There can be negative numbers in the Array
// but it will always be sorted

function countUniqueValues(arr) {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    const element = arr[j];
    if (arr[i] !== element) {
      i++;
      arr[i] = element;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3]));

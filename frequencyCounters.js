console.clear();
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the aray has it's corresponding value squared in the second array.
// The frequency of values must be the same

// function same(arrOne, arrTwo) {
//   // 0. Make the retured array
//   let newArr = [];
//   // 1. Check the two array have the same length
//   if (arrOne.length == arrTwo.length) {
//     // 2. Make a loop to the first array
//     for (const cur of arrOne) {
//       // 3. Square the value of the current element
//       const value = cur * cur;

//       // 4. check if the vlaue of that elemnt in the array
//       if (arrTwo.includes(value)) {
//         // 5. Add the vlaue to a new array
//         newArr.push(value);
//       }
//     }
//   }
//   // 6. return with validation if the new array have the same length of the second array
//   return newArr.length == arrTwo.length;
// }

// My solution is better
function same(arrOne, arrTwo) {
  if (arrOne.length == arrTwo.length) {
    let obj = {};
    for (const ele of arrOne) {
      const sqr = ele ** 2;
      obj[sqr] = ele;
    }
    return Object.keys(obj).length == arrTwo.length;
  }
  return false;
}
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [9, 1]));
console.log(same([1, 2, 1], [4, 4, 1]));

// Write a function which takes is a string and returns counts of each character in the string.

// function charCount(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     const element = str[i].toLowerCase();

//     if (/[a-z0-9]/.test(element)) {
//       if (result[element] > 0) {
//         result[element]++;
//       } else {
//         result[element] = 1;
//       }
//     }
//   }
//   return result;
// }
function charCount(str) {
  let result = {};
  for (var element of str) {
    if (isAlphNumeric(element)) {
      element = element.toLowerCase();
      result[element] = ++result[element] || 1;
    }
  }
  return result;
}
// is more effiction
function isAlphNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !code > 47 &&
    code < 58 && // numeric (0-9)
    !code > 64 &&
    code < 91 && // upper alpha (A-Z)
    !code > 96 &&
    code < 123 // numeric (0-9)
  ) {
    return false;
  }
  return true;
}

console.log(charCount("hello"));

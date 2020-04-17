console.clear();
// Given two strings, write a fucntion to determine if the second string is ana anagram of the first.
// An Anagram is a word phrase, or nae formed by rearranging the letters of the another, such as cinema, formed from iceman.

// MY SOLUTION
function validAnagram(strOne, strTwo) {
  // 0. Check the lenght of 2 strings are equle
  if (strOne.length !== strTwo.length) {
    return false;
  }
  // 1. create the first object for the first string
  let firstObj = {};
  // 2. create the second object for the second string
  let secondObj = {};
  // 3. make a loop for the first string and add a counter the the value of the key

  for (const firstElement of strOne) {
    firstObj[firstElement] = ++firstObj[firstElement] || 1;
  }
  // 3. make a loop for the second string and add a counter the the value of the key

  for (const secondElement of strTwo) {
    secondObj[secondElement] = ++secondObj[secondElement] || 1;
  }
  // 4. last loop that checks the to the first object and check the key to first object to be like the second object

  for (const [key, value] of Object.entries(firstObj)) {
    if (secondObj[key] !== value) {
      return false;
    }
  }
  return true;
}

// His Solution
function validAnagramTwo(strOne, strTwo) {
  // 0. Check the lenght of 2 strings are equle
  if (strOne.length !== strTwo.length) {
    return false;
  }
  let firstObj = {};

  for (const firstElement of strOne) {
    firstObj[firstElement] = ++firstObj[firstElement] || 1;
  }

  for (const secondElement of strTwo) {
    if (!firstObj[secondElement]) {
      return false;
    } else {
      firstObj[secondElement] -= 1;
    }
  }

  return true;
}

console.log(validAnagramTwo("", ""));
console.log(validAnagramTwo("aaz", "zza"));
console.log(validAnagramTwo("anagram", "nagaram"));
console.log(validAnagramTwo("rat", "car"));
console.log(validAnagramTwo("awesome", "awesom"));
console.log(validAnagramTwo("qwetry", "qeywrt"));
console.log(validAnagramTwo("texttwisttime", "timetwisttext"));

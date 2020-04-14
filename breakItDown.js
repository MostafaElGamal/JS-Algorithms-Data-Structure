console.clear();
// Write a function which takes is a string and returns counts of each character in the string.

// the output should be lowercase alphanumaric and numbers
function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character ...
  for (let i = 0; i < str.length; i++) {
    const element = str[i].toLowerCase();
    // if the char is a  number/letter and is a key in object, add on to count

    if (result[element] > 0) {
      result[element]++;
    }
    // if the char is number/letter and is a not in object, add it adn set value to 1
    else {
      result[element] = 1;
    }
  }
  // if character is something else ( spac, period, etc .) don't do anything
  //return object at end
  return result;
}

console.log(charCount("hello"));

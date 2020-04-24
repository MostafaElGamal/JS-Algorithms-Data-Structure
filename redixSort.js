console.clear();
// Get digit index in the full number from the right
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

// Know how many digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  var maxDigitCount = mostDigits(nums);
  for (var k = 0; k < maxDigitCount; k++) {
    var bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      bucket[digit].push(nums[i]);
    }
    // pop out every value in the arrays and add to an emphty array
    nums = [].concat(...bucket);
  }
  console.log(nums);
}

radixSort([312, 12, 44, 66, 2, 100, 1000]);

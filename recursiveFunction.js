console.clear();

function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);

function sumRange(num) {
  if (num === 1) return 1;
  console.log(num);
  return num + sumRange(num - 1);
}
sumRange(5);

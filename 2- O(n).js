console.clear();

function log(nums, names) {
  // O(n)
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    console.log(element);
  }
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
  }
}

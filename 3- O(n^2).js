console.clear();

function log(nums) {
  // O(n^2`)
  for (let i = 0; i < nums.length; i++) {
    const firstElement = array[i];
    console.log(firstElement);
    for (let index = 0; index < nums.length; index++) {
      const secondELement = array[index];
      console.log(secondELement);
    }
  }
}

console.clear();

function addUpToV1(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToV2(n) {
  return (n * (n + 1)) / 2;
}

// Test func one how mush it take in second under a big number
let t1 = performance.now();
addUpToV1(10000000);
let t2 = performance.now();

console.log(`Time Elpased: ${(t2 - t1) / 1000} seconds`);

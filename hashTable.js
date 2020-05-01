console.clear();

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        const element = this.keyMap[index][i][0];
        if (element == key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const firstElement = this.keyMap[i];
      if (firstElement) {
        for (let j = 0; j < firstElement.length; j++) {
          const secondElement = firstElement[j];
          if (!valuesArr.includes(secondElement[1])) {
            valuesArr.push(secondElement[1]);
          }
        }
      }
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      const firstElement = this.keyMap[i];
      if (firstElement) {
        for (let j = 0; j < firstElement.length; j++) {
          const secondElement = firstElement[j];
          if (!keysArr.includes(secondElement[0])) {
            keysArr.push(secondElement[0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("lightcoral", "#F08080");
// console.log(ht.keyMap);
// var get = ht.get("maroon");
// var values = ht.values();
var keys = ht.keys();
console.log(keys);
// var test = [];
// test[1] = "hello";
// console.log(test);

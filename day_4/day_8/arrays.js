//const fruits = [];
//fruits.push("banana", "apple", "peach");
//console.log(fruits.length); // 3/*
//increasing lenght
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
//decreasing lenght
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
//mutating
arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
//iterating the callback
function method(callbackFn, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (i in this) {
        const result = callbackFn.call(thisArg, this[i], i, this);
        // Do something with result; maybe return early
      }
    }
  }
  

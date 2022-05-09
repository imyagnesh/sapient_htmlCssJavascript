// set and map

// all the filed shoul be unique
// const arr = [1,1,2,3,4,5,6,7,8,9, 10, 11, 12];

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// primitive data type

// number
// boolean
// string
// bigInt
// symbol

// nonPremitive
// array
// object

// O(1)
//
// const set = new Set(arr);

// set.add()

// console.log(set.has(8));

// set.delete(5)

// console.log(set);

// for (const iterator of set) {
//     console.log(iterator);
// }

// primitiveType
// more methods
const set = new Set();
// set.

// set.add()

// nonPrmitiveData
const weakSet = new WeakSet();

const obj = { a: 1 };

weakSet.add(obj);
console.log(weakSet.has(obj));

// for (const iterator of weakSet) {

// }

// weakSet.add()

const map = new Map();

map.set('yagnesh', {
  name: 'yagnesh',
  age: 30,
  gender: 'male',
});

const weakMap = new WeakMap();

const obj2 = { a: 1 };
weakMap.set({ a: 1 }, { name: 'yagnesh' });

console.log(map.get('yagnesh'));

// for (const [key, value] of map) {
//     console.log(key);
//     console.log(value);
// }

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.entries(obj1));

for (const [key, value] of Object.entries(obj1)) {
  console.log(key);
  console.log(value);
}

// for (const key in obj1) {
//     console.log(key);
//     console.log(obj1[key]);
// }

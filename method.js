// const arr = [1,2,3,4,5,6,7]

const arr = [
  {
    name: 'yagnesh',
    age: 30,
  },
  {
    name: 'viat',
    age: 28,
  },
  {
    name: 'rohit',
    age: 34,
  },
  {
    name: 'shikhar',
    age: 35,
  },
];

const arr1 = [1, 2, 3, 4, 5];

// 100 -> 50

// findIndex

// complexity

// O(1) -> without ieration found
// O(N/2) ->
// O(logN) ->
// O(N)
// O(N^2)
//

// O(logN)
// if recond found then return index of record
// not found then -1
const index = arr.findIndex((item) => {
  console.log(item.name);
  return item.name === 'viat';
});

// O(logN)
const isExist = arr.some((item) => {
  console.log(item.name);
  return item.name === 'yagnesh';
});

console.log(isExist);

// O(logN)
const viratInfo = arr.find((item) => {
  console.log(item.name);
  return item.name === 'viat';
});

console.log(viratInfo);

// O(N)
// return an array
// not found then return empty array
const data = arr.filter((item) => {
  console.log(item.name);
  return item.name === 'viat';
});

// O(N)
const isEveryAdult = arr.every((item) => item.age > 18);

console.log(isEveryAdult);

console.log(data.length > 0);

console.log(index !== -1);

// mutable methods

// immutable methods

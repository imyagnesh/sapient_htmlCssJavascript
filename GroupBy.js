//

const arr = [1, 2, 3, 4, 5, 6];

// sum all the numbers

// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result = result + element;
// }

// console.log(result);

// prev is output of previous iteration
// const sum = arr.reduce((prev, current) => prev + current, 0)

// findIndex
// find
// some
// every
// filter

// console.log(sum);

const users = [
  {
    name: 'yagnesh',
    age: 30,
    gender: 'male',
  },
  {
    name: 'virat',
    age: 28,
    gender: 'male',
  },
  {
    name: 'rohit',
    age: 34,
    gender: 'male',
  },
  {
    name: 'dipeeka',
    age: 26,
    gender: 'female',
  },
  {
    name: 'alia',
    age: 20,
    gender: 'female',
  },
  {
    name: 'priyanka',
    age: 40,
    gender: 'female',
  },
  {
    name: 'taimur',
    age: 08,
    gender: 'male',
  },
  {
    name: 'amitabh',
    age: 74,
    gender: 'male',
  },
  {
    name: 'dadi',
    age: 112,
    gender: 'female',
  },
];

// 22

const age = 22;

const group = Math.floor(age / 10);

const key = `${group}0-${group}9`;

console.log(key);

// {
//     "00-09": [],
//     "20-29": [],
//     "30-39": [],
//     "40-49": [],
//     "70-79": []
// }

const obj = { a: 1, b: 2 };

console.log(obj['c']);

const groupByAge = users.reduce((p, c) => {
  const group = Math.floor(c.age / 10);
  const key = `${group}0-${group}9`;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupByAge);

// set map

// {
//     male: [],
//     female: []
// }

// isAnyChild is there or not

// const thirtyPlus = users.filter(x => x.age > 30);

// console.log(thirtyPlus);

// const thirtyPlus = users.reduce((p , c) => {
//     if(c.age > 30) {
//         p.push(c);
//     }
//     return p;
// }, [])

// console.log(thirtyPlus);

// const index = users.find(x => x.name === 'shikhar');

// console.log(index);

// const viratInfo = users.reduce((p, c, index) => {
//     console.log(p);
//     if(c.name === 'virat') {
//         return index
//     }
//     return p;
// }, -1)

// console.log(viratInfo);

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
    age: 34, // 32
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
    gender: 'male',
  },
  {
    name: 'priyanka',
    age: 40,
    gender: 'female',
  },
];

// O(N)
// method is immutable
// const updatedUsers = users.map(item => {
//     if(item.name === "rohit") {
//         // immutable
//         // return {...item, age: 32}

//         // mutable
//         item.age = 32;
//     }
//     return item;
// })

// O(logN)

// immutable
const rohitIndex = users.findIndex((x) => x.name === 'rohit');

console.log(rohitIndex);

// mutable

const arr = [1, 2, 3, 4, 5, 6];

arr.splice(3, 1);

console.log(arr);

// const index = 3

// const a1 = arr.slice(0,index)

// const a2 = arr.slice(index + 1)

// // console.log(a1);
// // console.log(a2);

// console.log([...a1, ...a2]);

console.log(users);

// console.log(updatedUsers);

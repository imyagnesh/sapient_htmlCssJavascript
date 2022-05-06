// closure

const modulo = (a, b) => a % d;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const calc = (a, b) => {
  return (operator) => {
    return operator(a, b);
  };
};

// 1 * 2 + 3 / 4;

console.log(add(1, 4));

console.log(calc(1, 2)(add));

// const calc = (a, b, operator) => {
//     if(operator === '+') {
//         return a + b;
//     }
//     if(operator === '-') {
//         return a - b;
//     }
//     if(operator === '*') {
//         return a * b;
//     }
//     if(operator === '/') {
//         return a / b;
//     }
//     return 0;
// }

// console.log(calc(1,3,'+'));

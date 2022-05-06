// v8 engine

// callback ->
// promise
// generator

// document.addEventListener("click", () => {

// })

// setTimeout(() => {  }, 100)

const login = () => {
  return new Promise((resolve, reject) => {
    // api
    resolve('token');
    // reject("token not available")
  });
};

const users = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject('token is not available');
    } else {
      resolve('users data');
    }
  });
};

const ms1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('ms1 reject');
    }, 2000);
  });
};

const ms2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('ms2 resolve');
    }, 3000);
  });
};

const ms3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('ms3 reject');
    }, 1000);
  });
};

const loadData = async () => {
  try {
    console.time('start process');
    const res = await Promise.any([ms1(), ms2(), ms3()]);
    console.log(res);
    // const lsRes = await ls();
    // const msRes = await ms();
    // const rsRes = await rs();
    // console.log(lsRes);
    // console.log(msRes);
    // console.log(rsRes);
    console.timeEnd('start process');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finnaly called');
  }
};

loadData();

// all ->
// allSettled ->
// race ->
// any ->

// login()
// .then(val => {
//     console.log(val);
//     users(val)
//     .then(val1 => {
//         console.log(val1);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// })

// p1()
// .then((val) => {
//     console.log(val);
// })
// .catch((val) => {
//     console.log(val);
// })
// .finally(() => {
//     console.log("finally called");
// })

// Javascript is sync single threaded programing language

// setTimeout(() => { console.log("a1"); }, 10.00) // micro queue(task) 9.99
// console.log("s1");
// console.log("s2");
// console.log("s3");
// console.log("s4");
// console.log("s5");
// console.log("s6");
// console.log("s7");
// setTimeout(() => { console.log("a2"); }, 10)
// console.log("s8");
// console.log("s9");
// setTimeout(() => { console.log("a3"); }, 50)
// console.log("s10");

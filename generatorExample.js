fetch();

class Authentication {
  static #login() {
    console.log('login success');
  }

  static #logout() {
    console.log('logout success');
  }

  *auth() {
    yield Authentication.#login();
    yield Authentication.#logout();
  }
}

const a = new Authentication();

const auth = a.auth();

auth.next();
auth.return();
auth.next();

// function* xyz() {
//     try {
//     yield 1;// api
//     yield 2;
//     yield 3;
//     yield 4;
//     return "completed"
//     } catch (error) {
//             console.log(error);
//     }
// }

// // created instance
// const gen = xyz();

// // for (const iterator of gen) {
// //     console.log(iterator);
// // }

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// // console.log(gen.next());
// // // gen.return();

// // gen.throw(new Error("something wrong..."))
// // console.log(gen.next());
// // // console.log(gen.next());
// // // console.log(gen.next());

// encapsulation
// abstraction
// polymorphism ->
// inhabitance

// method overloading -> javascript

// property
// method
// getter & setter

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = '';
  }

  set firstName(value) {
    if (!value) {
      this._firstName = '';
      return;
    }
    this._firstName = User.capitalize(value);
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    if (!value) {
      this._lastName = '';
      return;
    }
    this._lastName = User.capitalize(value);
  }

  get lastName() {
    return this._lastName;
  }

  set fullName(data) {
    this._fullName = `${this.firstName} ${this.lastName}`;
  }

  get fullName() {
    return this._fullName;
  }

  static capitalize(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }

  getUserInfo() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: this.fullName,
    };
  }

  changeName(firstName, lastName) {
    this.#changeFirstName(firstName);
    this.#changeLastName(lastName);
  }

  #changeFirstName(firstName) {
    this.firstName = firstName;
  }

  #changeLastName(lastName) {
    this.lastName = lastName;
  }
}

// code reusab

class SuperUser extends User {
  constructor() {
    super('sachin', 'tendulkar');
  }

  // method overRiding
  getUserInfo() {
    const data = super.getUserInfo();
    return { ...data, isPermanent: true };
  }
}

const superUser = new SuperUser();

console.log(superUser.getUserInfo());

const name = 'rahul';

console.log(User.capitalize(name));

const user = new User('yagnesh', 'modh');

console.log(user.getUserInfo());

user.changeName('yag', 'modi');

console.log(user.getUserInfo());

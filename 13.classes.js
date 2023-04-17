// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }
// // Prototypal inheritance
// User.prototype.displayInfo = function () {
//   console.log(`${this.username} / ${this.email}`);
// };

// const newUser = new User("john", "john@gmail.com", "qwerty123");
// console.log(newUser);
// newUser.displayInfo();

// Class Declaration
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  displayInfo() {
    console.log(`${this.username} / ${this.email}`);
  }
  static defaultCurrencyList() {
    return ["USD", "EUR", "GBP"];
  }
  set country(country) {
    this._country = country;
  }
  get country() {
    return this._country;
  }
}

const newUser = new User("john", "john@gmail.com", "qwerty123");
newUser.country = "Spain";
console.log(newUser.country);
console.log(newUser);
newUser.displayInfo();

console.log(User.defaultCurrencyList());

// Write your code here

const _privateUserName = Symbol('userName');
const _privatePassword = Symbol('password');
class User {
  constructor(userName, password, age) {
    this['age'] = age;
    this[_privateUserName] = userName;
    this[_privatePassword] = password;
  }
}

// test
var u1 = new User('Vasia', 'god', 77);
var u2 = new User('Petya', '123', 7);
console.log(u1);
console.log(u1.userName);
console.log(u1.password);
console.log(u2);
console.log(u2.userName);
console.log(u2.password);
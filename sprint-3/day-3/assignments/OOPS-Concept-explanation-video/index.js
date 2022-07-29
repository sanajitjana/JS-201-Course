// ------------------------------------------------------------------------------------------------
// inheritence example
// ------------------------------------------------------------------------------------------------

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// class Stduent extends User {
//   constructor(name, email, id) {
//     super(name, email);
//     this.id = id;
//   }

//   getStudentInfo() {
//     console.log(`${this.name} - ${this.email} - ${this.id}`);
//   }
// }

// class any extends User {}

// let s1 = new Stduent("Sanajit", "Sanajit@gmail.com", "fw19_0543");
// s1.getStudentInfo();

// ------------------------------------------------------------------------------------------------
// polymorphism example
// ------------------------------------------------------------------------------------------------

// class user {
//   getInfo() {
//     console.log("user");
//   }
// }

// class student extends user {
//   getInfo() {
//     super.getInfo();
//     super.getInfo();
//     super.getInfo();
//     console.log("student");
//   }
// }

// let s1 = new student();
// s1.getInfo();

// ------------------------------------------------------------------------------------------------
// encapsulation example
// ------------------------------------------------------------------------------------------------

// class user {
//   constructor() {
//     let name, email;
//   }

//   setName(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// let s1 = new user();
// s1.setName("Sanajit");
// console.log(s1.getName());

// ------------------------------------------------------------------------------------------------
// abstraction example
// ------------------------------------------------------------------------------------------------

function Car(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;

  let discout = 20000;

  let tototalPrice = () => {
    return this.price - discout;
  };
}

let c1 = new Car("Swift", "Grey", 800000);
console.log(c1.name, c1.color, c1.price);
c1.discout = 50000;
console.log(c1.tototalPrice());

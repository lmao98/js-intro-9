class Person {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
}

// Allowed but all info is undefind
// const person1 = new Person();

// console.log(person1);

class Customer extends Person {
  constructor(fname, lname, age, id) {
    super(fname, lname, age);
    this.id = id;
  }
}

const cust = new Customer("John", "Doe", 25, 1);

console.log(cust);

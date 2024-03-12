this; // {}

// this method is created to be used with objects

const getInfo = () => {
  console.log(`${this.fullname} is ${this.age} years old.`);
};

getInfo(); // undefind is undefind years old.

const person = {
  fullname: "Mustafa A",
  age: 25,
};

const student = {
  fullname: "Ameer B",
  age: 40,
};

getInfo.call(person);
getInfo.call(student);

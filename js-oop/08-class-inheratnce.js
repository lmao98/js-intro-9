class Person {
  constructor() {}

  eat() {
    console.log("EAT");
  }
  sleep() {
    console.log("SLEEP");
  }
}

class Programmer extends Person {
  constructor() {}
  code() {
    console.log("CODE");
  }
}

const programmer_mustafa = new Programmer();
programmer_mustafa.code();
programmer_mustafa.eat();
programmer_mustafa.sleep();

class Singer extends Person {
  constructor() {}
  sing() {
    console.log("Sing!");
  }
}

const singer_A = new Singer();

singer_A.sing();
singer_A.eat();
singer_A.sleep();

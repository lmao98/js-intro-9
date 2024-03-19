/*
Create a class called Cat
Create a constructor which takes below information and defines template to create many objects from the class
name, color, age

Create 3 functions as below
makesSound() -> 'MEOW'
eat() -> 'EAT'
sleep() -> 'SLEEP'

*/

class Cat {
  constructor(name, color, age) {
    (this.name = name), (this.color = color), (this.age = age);
  }
  makesSound() {
    console.log("MEOW");
  }
  eat() {
    console.log("EAT");
  }
  sleep() {
    console.log("SLEEP");
  }
}

const cat1 = new Cat("Simba", "Orange", 1);
const cat2 = new Cat("Lucy", "White", 2);
const cat3 = new Cat("Oliver", "Brown", 3);
cats = [cat1, cat2, cat3];
for (const cat of cats) {
  console.log(cat);
}
const oldestCat = cats.reduce((prev, curr) => (prev.age > curr.age ? prev : curr), cats[0]);
console.log(oldestCat);

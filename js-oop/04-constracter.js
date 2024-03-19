// function Car(year, make, model, price) {
//   this.year = year;
//   this.make = make;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.drives = function (year, make, model) {
//   console.log(`${this.year} ${this.make} ${this.model} drives.`);
// };

// Car.prototype.stops = function (year, make, model) {
//   console.log(`${this.year} ${this.make} ${this.model} stops.`);
// };

// const car1 = new Car(2023, "Tesla", "X", 80000);
// const car2 = new Car(2022, "BMW", "X7", 60000);
// const car3 = new Car(2020, "Tesla", "Y", 27000);

// const carsArray = [car1, car2, car3];
// for (const car of carsArray) {
//   console.log(car);
// }
// carsArray[0].drives();
// carsArray[0].stops();
// carsArray[1].drives();
// carsArray[1].stops();
// carsArray[2].drives();
// carsArray[2].stops();

// console.log(`${car1.year} ${car1.make} ${car1.model} is $${car1.price}`);
// console.log(`${car2.year} ${car2.make} ${car2.model} is $${car2.price}`);
// console.log(`${car3.year} ${car3.make} ${car3.model} is $${car3.price}`);

// AFTER ES6 - classes
class Car {
  // create a constructor
  constructor(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
  }

  drive() {
    console.log(`${this.year} ${this.make} ${this.model} drives.`);
  }

  stop() {
    console.log(`${this.year} ${this.make} ${this.model} stops.`);
  }
}

const car1 = new Car(2023, "Tesla", "X", 80000);
const car2 = new Car(2022, "BMW", "X7", 60000);
const car3 = new Car(2023, "Tesla", "Y", 27000);

const allcars = [car1, car2, car3];

for (const car of allcars) {
  console.log(car);
  car.drive();
  car.stop();
  console.log(`${car.year} ${car.make} ${car.model} is $${car.price}.`);
}

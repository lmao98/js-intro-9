// task 1

const users = [
  {
    firstName: "Tech",
    lastName: "Global",
    email: "tech.global@techglobal.com",
    age: 3,
    address: {
      street_line_1: "2800 S River Rd",
      street_line_2: "Suite 310",
      city: "Des Plaines",
      state: "IL",
      zip: "60018",
    },
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    age: 47,
    address: {
      street_line_1: "123 Abc St",
      street_line_2: "",
      city: "Chicago",
      state: "IL",
      zip: "12345",
    },
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    age: 30,
    address: {
      street_line_1: "123 Abc St",
      street_line_2: "",
      city: "Chicago",
      state: "IL",
      zip: "12345",
    },
  },
  {
    firstName: "Alex",
    lastName: "Smith",
    email: "alexsmith@outlook.com",
    age: 32,
    address: {
      street_line_1: "456 Xyz St",
      street_line_2: "",
      city: "Miami",
      state: "Florida",
      zip: "67890",
    },
  },
];

// task 1-1

const olderThan30Count = users.filter((user) => user.age > 30).length;
console.log(olderThan30Count);

// task 1-2

const chicagoUsersCount = users.filter((user) => user.address.city === "Chicago").length;
console.log(chicagoUsersCount);

// task 1-3

const ilUsersCount = users.filter((user) => user.address.state === "IL").length;
console.log(ilUsersCount);

// task 1-4

const gmailUsersCount = users.filter((user) => user.email.endsWith("@gmail.com")).length;
console.log(gmailUsersCount);

// task 1-5

const namesYoungerThan35 = users.filter((user) => user.age < 35).map((user) => user.firstName);
console.log(namesYoungerThan35);

// task 1-6

const totalAge = users.reduce((count, user) => count + user.age, 0); // returns 112 which is the total ages
const avgAges = totalAge / users.length; // divide by the length to get the avg
console.log(avgAges);

// Task 2

const appleStore = [
  {
    productName: "iPhone 14 Pro",
    quantity: 50,
    price: 1099.99,
  },
  {
    productName: "MacBook Pro 16-inch",
    quantity: 30,
    price: 2399.99,
  },
  {
    productName: "iPad Air",
    quantity: 75,
    price: 599.99,
  },
  {
    productName: "Apple Watch Series 7",
    quantity: 100,
    price: 399.99,
  },
  {
    productName: "AirPods Pro",
    quantity: 200,
    price: 249.99,
  },
];

console.log(appleStore[0].price);

// const mostExpensiveProduct = appleStore.filter((user) => Math.max(user.price));
// console.log(mostExpensiveProduct);

const mostExpensiveProduct = appleStore.reduce((prev, current) => (prev.price > current.price ? prev : current));
console.log(mostExpensiveProduct.productName);

// task 2-2

const leastExpensiveProduct = appleStore.reduce((prev, current) => (prev.price < current.price ? prev : current));
console.log(leastExpensiveProduct.productName);

// task 2-3

const productWithBiggestQuantity = appleStore.reduce((prev, current) => (prev.quantity > current.quantity ? prev : current));
console.log(productWithBiggestQuantity.productName);

// task 2-4

const productWithSmallestQuantity = appleStore.reduce((prev, current) => (prev.quantity < current.quantity ? prev : current));
console.log(productWithSmallestQuantity.productName);

// task 2- 5
const productNames = appleStore.map((product) => product.productName);
console.log(productNames);

// Task 3

const bookstore = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 9.99,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    price: 7.99,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    price: 12.49,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 14.99,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    price: 10.99,
  },
];

// task 3-1
const cheapestBook = bookstore.reduce((prev, current) => (prev.price < current.price ? prev : current));
console.log(cheapestBook.title);

// task 3-2
const mostExpensiveBook = bookstore.reduce((prev, current) => (prev.price > current.price ? prev : current));
console.log(mostExpensiveBook.title);

// task 3-3
const classicBooks = bookstore.filter((book) => book.genre === "Classic").map((book) => book.title);
console.log(classicBooks);

//______________________MORE QUESTIONS___________________________

// Calculate the total price of products in the cart
const totalPrice1 = bookstore.reduce((total, book) => total + book.price, 0);
console.log(totalPrice1);

// Find the brands of all the products in the cart
const brands1 = bookstore.map((book) => book.author.split(" ").slice(-1)[0]);
console.log(brands1);

// Find all the items in the cart with their quantity
const itemsWithQuantity1 = [];
bookstore.forEach((book) => {
  itemsWithQuantity1.push(`${book.title}, 1`);
});
console.log(itemsWithQuantity1);

// Task 4

/*
You are given a JS Array below:
Calculate the total price of products in the cart     -> 2444
Find the brands of all the products in the cart   -> [ 'Dell', 'Apple', 'Sony' ]
Find all the items in the cart with their quantity  -> [ 'Laptop, 1', 'Smartphone 2', 
'Headphones, 3' ]
*/

const shoppingCart = {
  userId: 12345,
  items: [
    {
      productId: 1,
      productName: "Laptop",
      price: 999.0,
      quantity: 1,
      specifications: {
        brand: "Dell",
        screen: "15.6 inches",
        processor: "Intel Core i7",
      },
    },
    {
      productId: 2,
      productName: "Smartphone",
      price: 499.0,
      quantity: 2,
      specifications: {
        brand: "Apple",
        model: "iPhone 12",
        color: "Space Gray",
      },
    },
    {
      productId: 3,
      productName: "Headphones",
      price: 149.0,
      quantity: 3,
      specifications: {
        brand: "Sony",
        type: "Over-ear",
        wireless: true,
      },
    },
  ],
  shippingAddress: {
    street: "123 Main Street",
    city: "Anytown",
    zipCode: "12345",
  },
  orderDate: "2023-08-29",
};

// task 4-1
const totalPrice = shoppingCart.items.reduce((total, item) => total + item.price * item.quantity, 0);
console.log(totalPrice);

// task 4-2
const brands = shoppingCart.items.map((item) => item.specifications.brand);
console.log(brands);
// task 4-3
const itemsWithQuantity = [];
shoppingCart.items.forEach((item) => {
  itemsWithQuantity.push(`${item.productName}, ${item.quantity}`);
});
console.log(itemsWithQuantity);

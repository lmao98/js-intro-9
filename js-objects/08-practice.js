/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/
const student = {
  firstName: "Alex",
  lastName: "Smith",
  hobbies: ["Soccer", "Watching movies"],
  exam_scores: {
    midterm: 60,
    final: 90,
  },
};

console.log(student);
/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print first hobby -> Soccer
*/

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);

let sum = student.exam_scores.midterm + student.exam_scores.final;

console.log(sum / 2);

const book = {
  name: "Amok",
  author: {
    fname: "Stefan",
    lname: "Zweig",
  },
  genre: "Novella",
};
console.log(book);
console.log(book.author);

const books = [
  {
    name: "Amok",
    author: {
      fname: "Stefan",
      lname: "Zweig",
    },
    genre: "Novella",
  },
  {
    name: "My Name Is Red",
    author: {
      fname: "Orhan",
      lname: "Pamuk",
    },
    genre: "Historical Novel",
  },
  {
    name: "1984",
    author: {
      fname: "George",
      lname: "Orwell",
    },
    genre: "Dystopian Literature",
  },
];

let count = 0;

for (let i = 0; i < books.length; i++) {
  if (books[i].author.fname.toLowerCase().includes("a")) {
    count++;
  }
}

console.log(count);

let bookNames = [];

for (let i = 0; i < books.length; i++) {
  bookNames.push(books[i].name);
}

console.log(bookNames);

// ES6
class Book {
  constructor(title, genre, page) {
    this.title = title;
    this.genre = genre;
    this.page = page;
  }
}

class Author extends Book {
  constructor(firstName, lastName, country, arr) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.arr = arr;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getBooks() {
    return this.arr;
  }
}

const book1 = new Book("A Game of Thrones", "Epic Fantasy", 694);
const book2 = new Book("A Clash of Kings", "Epic Fantasy", 768);
const book3 = new Book("A Storm of Swords", "Epic Fantasy", 973);

const author = new Author("George R. R.", "Martin", "United States", [book1, book2, book3]);

console.log(author.getFullName());

for (const book of author.getBooks()) {
  console.log(book);
}

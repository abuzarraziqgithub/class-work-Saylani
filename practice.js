// Book Inventory System:
// Design an object named book to represent a book in a library inventory system. Include properties such as title, author, and availableCopies. Populate the object with data for multiple books in the library's collection.

const Book = function (title, author, availableCpies) {
  this.title = title;
  this.author = author;
  this.availableCpies = availableCpies;
  this.availableCpiesf = function () {
    console.log(
      `${this.availableCpies} copies are avialable for the ${this.title} book`
    );
  };
};

const book1 = new Book("Algebra", "Alkhwarzmi", 22);
const book2 = new Book("Biology", "Bu-Ali Sina", 40);
const book3 = new Book("Chemistry", "Jabir Ibn e Hayyan", 35);
console.log(book1);
book1.availableCpiesf();
console.log(book2);
book2.availableCpiesf();
console.log(book3);
book3.availableCpiesf();

const myLibrary = [
  {
    title: "The Hobbit",
    Author: "J. R. R. Tolkein",
    pageCount: 304,
    read: "yes",
  },
];

function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.info = `${this.title} by ${this.author} is ${this.pageCount} long`;
}

function addBookToLibrary() {
  const book = new Book(
    prompt("enter book title"),
    prompt("enter author"),
    prompt("enter page count"),
    prompt("enter read status")
  );
  myLibrary.push(book);
}

// function displayLibrary () {
//   myLibrary.forEach()
// }

const submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  addBookToLibrary();
});

let newBook = document.querySelector(".new");
newBook.addEventListener("click", function () {
  document.getElementById("form").classList.toggle("hide");
});

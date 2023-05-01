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

function addBookToLibrary(obj) {
  const book = new Book(obj);
  myLibrary.push(book);
  console.log(myLibrary);
}

// function displayLibrary () {
//   myLibrary.forEach()
// }

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form); 
  const obj = Object.fromEntries(data);
  myLibrary.push(obj);
  console.log(myLibrary);
  document.getElementById("form").classList.toggle("hide");
});

let newBook = document.querySelector(".new");
newBook.addEventListener("click", function () {
  document.getElementById("form").classList.toggle("hide");
});

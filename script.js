const titleElem = document.querySelector("#Title");
const authorElem = document.querySelector("#Author");
const pageNumberElem = document.querySelector("#PageCount");
const readElem = document.querySelector("#read");


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
  this.info = `${this.title} by ${this.author} is ${this.pageCount} pages long ${this.read}`;
}

// function displayLibrary () {
//   myLibrary.forEach()
// }

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let titleCont = titleElem.value;
  let authorCont = authorElem.value;
  let pageNumberCont = Number(pageNumberElem.value);
  let readCont = ""
  if (readElem.checked === true) {
    readCont = "read";
  } else {
    readCont = "not read yet";
  }
  let newBook = new Book(titleCont, authorCont, pageNumberCont, readCont);
  myLibrary.push(newBook);
  document.getElementById("form").classList.toggle("hide");
  console.log(myLibrary);
});

let newBook = document.querySelector(".new");
newBook.addEventListener("click", function () {
  document.getElementById("form").classList.toggle("hide");
});

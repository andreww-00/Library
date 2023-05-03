const titleElem = document.querySelector('#Title');
const authorElem = document.querySelector('#Author');
const pageNumberElem = document.querySelector('#PageCount');
const readElem = document.querySelector('#read');
const bookShelf = document.querySelector('.bookshelf');
const placeHolder = document.querySelector('.placeholder');
const form = document.querySelector('form');
const newBook = document.querySelector('.new');

const myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkein',
    pageCount: 304,
    read: 'read',
  },
];

function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.info = `${this.title} by ${this.author} is ${this.pageCount} pages long, is ${this.read}`;
}

function addToLibrary() {
  let titleCont = titleElem.value;
  let authorCont = authorElem.value;
  let pageNumberCont = Number(pageNumberElem.value);
  let readCont = '';
  if (readElem.checked === true) {
    readCont = 'read';
  } else {
    readCont = 'not read yet';
  }
  let newBook = new Book(titleCont, authorCont, pageNumberCont, readCont);
  myLibrary.push(newBook);
}

placeHolder.textContent = myLibrary[0].title + ' by '+ myLibrary[0].author + ', ' + myLibrary[0].pageCount + ' pages long, ' + myLibrary[0].read;

function displayBook() {
  let index = (myLibrary.length - 1);
  const div = document.createElement('div');
  div.classList.add('placeholder');
  div.textContent = myLibrary[index].info;
  bookShelf.appendChild(div);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToLibrary();
  displayBook();
  document.getElementById('form').classList.toggle('hide');
});

newBook.addEventListener('click', () => {
  document.getElementById('form').classList.toggle('hide');
});

// for (let i = 0; i < myLibrary.length; i += 1) {
//   console.log('test');
// }

const titleElem = document.querySelector('#Title');
const authorSelector = document.querySelector('#Author');
const pageNumberSelector = document.querySelector('#PageCount');
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
  let authorCont = authorSelector.value;
  let pageNumberCont = Number(pageNumberSelector.value);
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
  const header = document.createElement('h3');
  header.textContent = myLibrary[index].title;
  const pageCountElem = document.createElement('p');
  pageCountElem.textContent = `pages: ${myLibrary[index].pageCount}`;
  const authorElem = document.createElement('p');
  authorElem.textContent = `by ${myLibrary[index].author}`;
  const toggleRead = document.createElement('button');
  toggleRead.textContent = 'read?';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  bookShelf.appendChild(div);
  div.append(header, pageCountElem, authorElem, toggleRead, deleteButton);
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

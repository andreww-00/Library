const titleElem = document.querySelector('#Title');
const authorSelector = document.querySelector('#Author');
const pageNumberSelector = document.querySelector('#PageCount');
const readElem = document.querySelector('#read');
const bookShelf = document.querySelector('.bookshelf');
const form = document.querySelector('form');
const newBook = document.querySelector('.new');
const closeForm = document.querySelector('.closeForm');

const myLibrary = [];

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
    readCont = '✓ Read';
  } else {
    readCont = '✖ Read';
  }
  let newBook = new Book(titleCont, authorCont, pageNumberCont, readCont);
  myLibrary.push(newBook);
}

function displayBook() {
  // Stores form information and applies it to card which is then appended to screen
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
  toggleRead.textContent = `${myLibrary[index].read}`;
  toggleRead.classList.add('readButton', `${myLibrary[index].read}`.replace(/\s/g, ''));
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.dataset.index = index;
  deleteButton.textContent = '✖';
  bookShelf.appendChild(div);
  div.append(header, pageCountElem, authorElem, toggleRead, deleteButton);

  // Logic for delete buttons
  const deleteButtonElem = document.querySelectorAll('.delete');
  let newestBook = deleteButtonElem.length - 1;
  deleteButtonElem[newestBook].addEventListener('click', (e) => {
    let selectedCard = e.target.dataset.index;
    let displayedCards = document.querySelectorAll('.placeholder');
    displayedCards[selectedCard].remove();
    myLibrary.splice(selectedCard, 1);
    let deletebuttonElem = document.querySelectorAll('.delete');
    // Reassigns dataset.index value for each card
    let store = 0;
    deletebuttonElem.forEach((item) => {
      item.dataset.index = store;
      store += 1;
    });
  });

  // Logic for read buttons
  const readSelector = document.querySelectorAll('.readButton');
  readSelector[newestBook].addEventListener('click', (e) => {
    let selectedReadButton = e.target;
    if (selectedReadButton.textContent === '✓ Read') {
      selectedReadButton.textContent = '✖ Read';
      selectedReadButton.classList.add('✖Read');
      selectedReadButton.classList.remove('✓Read');
    } else {
      selectedReadButton.textContent = '✓ Read';
      selectedReadButton.classList.add('✓Read');
      selectedReadButton.classList.remove('✖Read');
    }
  });
}

// Runs logic for adding book to library array and displaying book on screen
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addToLibrary();
  displayBook();
  document.getElementById('form').classList.toggle('hide');
});

// Close form button
closeForm.addEventListener('click', () => {
  document.getElementById('form').classList.toggle('hide');
});
// un-hides form on new book button click
newBook.addEventListener('click', () => {
  document.getElementById('form').classList.toggle('hide');
});

// Displays example books on webpage on load.
const bookOne = new Book('The Hobbit', 'J. R. R. Tolkein', 304, '✓ Read');
const bookTwo = new Book('Foundations', 'Isaac Asimov', 255, '✖ Read');
myLibrary.push(bookOne);
displayBook();
myLibrary.push(bookTwo);
displayBook();

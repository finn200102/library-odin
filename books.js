const myLibary = [];
function Book(author, title, numberOfPages, readingStatus) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.readingStatus = readingStatus;
}

function addBookToLibary(book) {
  myLibary.push(book);
}

const book1 = new Book("author", "title", 100, true);
const book2 = new Book("author", "title", 100, true);
const book3 = new Book("author", "title", 100, true);
const book4 = new Book("author", "title", 100, true);

addBookToLibary(book1);
addBookToLibary(book2);
addBookToLibary(book3);
addBookToLibary(book4);

function displayLibary() {
  const content = document.querySelector(".content");
  for (let i = 0; i < myLibary.length; i++) {
    const book = myLibary[i];
    console.log(book);
    const bookContainer = document.createElement("div");
    bookContainer.textContent = book.author;
    bookContainer.classList.add("book-container");
    content.appendChild(bookContainer);
  }
}

displayLibary();

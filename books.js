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
    const title = document.createElement("h3");
    title.textContent = book.title;
    const bookInfo = document.createElement("ul");
    const author = document.createElement("li");
    author.textContent = `Author: ${book.author}`;
    const numberOfPages = document.createElement("li");
    numberOfPages.textContent = `numberOfPage: ${book.numberOfPages}`;
    const readingStatus = document.createElement("li");
    readingStatus.textContent = `reading:${book.readingStatus}`;
    bookContainer.classList.add("book-container");
    bookContainer.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(numberOfPages);
    bookInfo.appendChild(readingStatus);
    bookInfo.classList.add("book-info");
    bookContainer.appendChild(bookInfo);
    content.appendChild(bookContainer);
  }
}

displayLibary();

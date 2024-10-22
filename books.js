const myLibary = [];
function Book(author, title, numberOfPages, readingStatus) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.readingStatus = readingStatus;
}

Book.prototype.toggleRead = function () {
  this.readingStatus = this.readingStatus == "read" ? "unread" : "read";
};

function addBookToLibary(book) {
  console.log("addbook");
  myLibary.push(book);
}

function showForm() {
  document.getElementById("popup").style.display = "block";
}

function hideForm() {
  document.getElementById("popup").style.display = "none";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const statusCheckbox = document.getElementById("status");
  formData.set("status", statusCheckbox.checked ? "read" : "unread");
  const formDataObject = Object.fromEntries(formData.entries());
  console.log(formDataObject);
  const book = new Book(
    formDataObject.author,
    formDataObject.title,
    formDataObject.number,
    formDataObject.status
  );
  console.log(book);
  addBookToLibary(book);

  displayLibary();
  this.reset();
  hideForm();
});

function undisplayLibary() {
  var container = document.getElementById("content");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function displayLibary() {
  undisplayLibary();
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
    numberOfPages.textContent = `Number of pages: ${book.numberOfPages}`;
    const readingStatus = document.createElement("li");
    readingStatus.textContent = `Reading status:  ${book.readingStatus}`;
    // toggle button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "change";
    toggleButton.addEventListener("click", function () {
      myLibary[i].toggleRead();
      displayLibary();
      console.log(`${i}`);
    });
    // remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", function () {
      console.log("hi");
      myLibary.splice(i, 1);
      displayLibary();
    });
    bookContainer.classList.add("book-container");
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(numberOfPages);
    bookInfo.appendChild(readingStatus);
    bookInfo.classList.add("book-info");

    bookContainer.appendChild(bookInfo);
    bookContainer.appendChild(toggleButton);
    content.appendChild(bookContainer);
  }
}

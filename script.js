const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);

    const libraryElement = document.querySelector('#library > div');
    const bookElement = document.createElement('div');
    
    bookElement.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" id="book--title">${book.title}</h5>
                <p class="card-text">It is a very nice book</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="book--author">Author: ${book.author}</li>
                <li class="list-group-item" id="book--pages">Pages: ${book.pages}</li>
                <li class="list-group-item" id="book--read">Read: ${book.read ? "Yes" : "No"}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Edit</a>
                <a href="#" class="card-link">Delete</a>
            </div>
        </div>
    `

    for(var i=0; i<myLibrary.length; i++){
        libraryElement.appendChild(bookElement);
    }
}
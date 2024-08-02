const myLibray = [];


const display = document.querySelector('#displayBooks');
const addBookDialog = document.getElementById('addBook');
const deleteBookDialog = document.getElementById('deleteBook');
const editBookDialog = document.getElementById('updateBook');
const addBookBtn = document.getElementById('addBook');
const confirmAdd = document.querySelector('#confirmAdd');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const newBook = new Book("wjidwjdidw", "wkowdkdo", "1222", "read");
const newBook2 = new Book("wjidwjdidw", "wkowddwdwkdo", "1222", "read");
const newBook3 = new Book("wjidwjdiddwdww", "wkowdkdo", "1222", "not read yet");


myLibray.push(newBook);
myLibray.push(newBook2);
myLibray.push(newBook3);




function displayBook() {
    console.log(myLibray)
    display.innerHTML = '';
    myLibray.forEach((book , index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const title = document.createElement('h2');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent = `Read: ${book.read}`;

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(readStatus);
        display.appendChild(bookDiv);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteBook(index);
        })
        bookDiv.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editBook(book);
        })
        bookDiv.appendChild(editButton);
})

}




function deleteBook(index){
    if(addBookDialog.open){
        console.log("open delete book dialog")
    } else {
        deleteBookDialog.showModal();
    }
    const confirmDelete = document.querySelector('#confirmDelete');
    confirmDelete.addEventListener('click', () => {
        myLibray.splice(index, 1);
        deleteBookDialog.close();
        displayBook();
    })

    const cancelDelete = document.querySelector("#cancelDelete");
    cancelDelete.addEventListener('click', () => {
        deleteBookDialog.close();
    })
}



function editBook(book){
    if(editBookDialog.open){
        console.log("open edit book dialog")
        editBookDialog.close();
    } else {
        editBookDialog.showModal();
    }
    const updateTitle = document.getElementById('updateTitle').value;
    const updateAuthor = document.getElementById('updateAuthor').value;
    const updatePages = document.getElementById('updatePages').value;
    const updateRead = document.getElementById('updateRead').value;
    const confirmUpdate = document.getElementById('confirmUpdate');
    confirmUpdate.addEventListener('click', (e) => {
        e.preventDefault();
        editBookDialog.close();
        console.log(updateTitle, updateAuthor, updatePages);
        book.title = updateTitle;
        book.author = updateAuthor;
        book.pages = updatePages;
        book.read = updateRead.checked ? "read" : "not read yet";
        displayBook();
        
    })
    const cancelUpdate = document.querySelector('#cancelUpdate');
    cancelUpdate.addEventListener('click', () => {
        editBookDialog.close();
    })
}


function addDialog(){
    if(addBookDialog.open){
        console.log("open add book dialog")
        addBookDialog.close();
    } else {
        addBookDialog.showModal();
    }
    confirmAdd.addEventListener('click', (e) => {
        const newTitle = document.querySelector('#title').value;
        const newAuthor = document.querySelector('#author').value;
        const newPages = document.querySelector('#pages').value;
        const newRead = document.querySelector('#read').checked;
        e.preventDefault();
        addBookDialog.close();
        addBook(newTitle, newAuthor, newPages, newRead);
    })

    const cancelAdd = document.querySelector('#closeDialog');
    cancelAdd.addEventListener('click', () => {
        addBookDialog.close();
    })
};


function addBook(newTitle,newAuthor,newPages,newRead) {
    const newBook = new Book(newTitle, newAuthor, newPages, newRead? "read" : "not read yet");
    myLibray.push(newBook);
    displayBook(myLibray);
}


displayBook()
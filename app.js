
let submit = document.getElementsByClassName('submit-button');
let grid = document.getElementById('grid');

submit[0].addEventListener('click', addBook);

function Book(name, author, status){
    this.name = name;
    this.author = author;
    this.status = status;
}


function addBook(){
    let bookInput = document.getElementById("book-text");
    let bookName = bookInput.value;
    let authorInput = document.getElementById("author-text")
    let status = document.getElementById("status");
    let authorName = authorInput.value;
    let statusVal = status.options[status.selectedIndex].value;
    let toAdd = new Book(bookName, authorName, statusVal);
    
    if(bookName == "" && authorName == "" ){
        alert("Please fill in the book name and author name");
        return;
    }
    else if(bookName == ""){
        alert("Please fill in the book name");
        return;
    }
    else if(authorName == ""){
        alert("Please fill in the author name");
        return;
    }


    let bookDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let statusDiv = document.createElement('div');
    let statusButton = document.createElement('button');
    
    let newItem = document.createElement('div');
    newItem.setAttribute('id', bookName + authorName + statusVal);
    newItem.setAttribute('class', 'item');
    grid.appendChild(newItem);

    bookDiv.setAttribute('class', 'book-name-value');
    authorDiv.setAttribute('class', 'book-author-value');
    statusDiv.setAttribute('class', 'book-status-value');
    statusButton.setAttribute('class', 'read-button');

    bookDiv.textContent = bookName;
    authorDiv.textContent = authorName;
    if(statusVal == "read"){
        statusButton.textContent = "Read";
    }else{
        statusButton.textContent = "Not Read";
    }

    statusDiv.appendChild(statusButton);

    newItem.appendChild(bookDiv);
    newItem.appendChild(authorDiv);
    newItem.appendChild(statusDiv);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class','delete-button');
    deleteButton.setAttribute('id', bookName + authorName + statusVal);
    deleteButton.textContent = "Delete";

    newItem.appendChild(deleteButton);

    statusButton.addEventListener('click', (event) => {
        if(event.target.textContent == "Read"){
            event.target.textContent = "Not Read";
        }else{
            event.target.textContent = "Read";
        }
    });

    deleteButton.addEventListener('click', (event) => {
        let toBeDeleted = document.getElementById(event.target.id);
        grid.removeChild(toBeDeleted);
    })

    status.selectedIndex = "read";
    bookInput.value = "";
    authorInput.value = "";

}


let images = ['/Bookstore/assets/img/book2.jpg', '/Bookstore/assets/img/book3.jpg', '/Bookstore/assets/img/book4.jpg',
    '/Bookstore/assets/img/book5.jpg', '/Bookstore/assets/img/book6.jpg',
    '/Bookstore/assets/img/book7.jpg', '/Bookstore/assets/img/book8.jpg',
    '/Bookstore/assets/img/book9.jpg', '/Bookstore/assets/img/book10.jpg'];

let book = document.getElementById('bookData');

function loadInit() {
    loadBookData();
    getFromLocalStorage();

}

function loadBookData() {
    getFromLocalStorage();
    book.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        book.innerHTML += templateBooks(i);
        let bookComments = books[i].comments;
        let bookLike = books[i].likes;
        getCommens(i, bookComments);
    }
    saveToLocalStorage();
}

function getCommens(i, bookComments) {

    let coms = document.getElementById('bookCom ' + i);
    coms.innerHTML = '';
    for (let i = 0; i < bookComments.length; i++) {
        let bookCommentsI = bookComments[i];
        coms.innerHTML += templateComment(bookCommentsI);
    }

    saveToLocalStorage();
}

function inputComments(i) {

    let input = document.getElementById(`inputComment-${i}`);
    let inputRef = input.value;

    if (inputRef == '') {
        alert('geben sie bitte einen Kommentar ein')
    } else {
        books[i].comments.push({ name: "Alex", comment: inputRef });
    }

    input.innerHTML = '';
    saveToLocalStorage();
    loadBookData();
}

function likeBtn(i, bookLike) {

    if (books[i].liked) {

        bookLike = books[i].likes - 1;
        books[i].likes = bookLike;
        books[i].liked = false;
        books[i].heart = picLike[1];

    } else {

        bookLike = books[i].likes + 1;
        books[i].likes = bookLike;
        books[i].liked = true;
        books[i].heart = picLike[0];

    }

    saveToLocalStorage();
    loadInit();

}
















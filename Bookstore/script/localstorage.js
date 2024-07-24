function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("books"));
    if (myArr) {
        books = myArr;
    }
}
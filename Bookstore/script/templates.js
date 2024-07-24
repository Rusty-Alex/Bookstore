function templateComment(bookCommentsI) {
    return `<p><b>[${bookCommentsI.name}]</b> : ${bookCommentsI.comment}</p>`;
}

function templateBooks(i) {
    return `<div class="bookArea">
                <div class="booksec">
                    <h1>${books[i].name}</h1>
                </div>
                <div class="booksec"><img class="imgHead" src="${images[i]}" alt=""></div>
                <div class="booksec">
                    <div class="bookInfo">
                        <span>${books[i].price} €</span>
                        <div class="bookLike"><span id="like">${books[i].likes}</span> <img onclick="likeBtn(${i})" class="imgLike"
                                src="${books[i].heart}" alt="Bild von Like Button"></div>
                    </div>
                    <div class="bookFeatures">   
                    <span>Author: ${books[i].author}</span>
                    <span>Genre: ${books[i].genre}</span>
                    <span>Erscheinungsjahr: ${books[i].publishedYear}</span>                    
                    </div>
                </div>
                <div id="test"  class="booksec"><h3>Kommentare :</h3> <span id="bookCom ${i}" ></span> </div>
                <div class="booksec"><input class=" inputComments" id="inputComment-${i}"  type="text"> <button onclick="inputComments(${i})" class="btnInput"><img class="inputPic" src="./assets/img/icons8-send-48.png" alt="Pfeil Senden Bild"></button> </div>
   
            </div>`
}
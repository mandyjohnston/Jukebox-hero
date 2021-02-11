import { deleteAlbum } from "./app.js";
import {mainElement} from "./mainElement.js";
import {songElement} from "./songElement.js";

const albumElement = function(album) {

    const mainContent = document.querySelector(".main-content");
    clearChildren(mainContent);

    const mainAlbumElement = document.createElement("div");
    mainAlbumElement.classList.add("main-album-content");
    mainContent.appendChild(mainAlbumElement);
    
    const albumHeaderElement = document.createElement("header");
    albumHeaderElement.classList.add("album-header");
    mainAlbumElement.prepend(albumHeaderElement);

    const h1Element = document.createElement("h1");
    h1Element.classList.add("album-title");
    h1Element.innerText = album.title;
    albumHeaderElement.appendChild(h1Element);

    const h2Element = document.createElement("h2");
    h2Element.classList.add("artist-name");
    h2Element.innerText = album.artistName;
    albumHeaderElement.appendChild(h2Element);

    const trackListing = document.createElement("div");
    trackListing.classList.add("track-listing");
    mainAlbumElement.appendChild(trackListing);

    album.songs.forEach((song) => {
        const songList = document.createElement("ul");
        songList.classList.add("song-list");
        trackListing.appendChild(songList);
        const songTitle = document.createElement("li");
        songTitle.classList.add("song-title");
        songTitle.innerText = song.title;
        songList.appendChild(songTitle);

        songTitle.addEventListener("click", () => {
        songElement(song)
    });
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    mainAlbumElement.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        deleteAlbum(id);
    });
    
    album.comments.forEach((comment) => {
    const commentDisplay = document.createElement("div");
    commentDisplay.classList.add("comment-display");
    mainAlbumElement.appendChild(commentDisplay);
    const commentAuthor = document.createElement("p");
    commentAuthor.classList.add("comment-author");
    commentAuthor.innerText = comment.author;
    commentDisplay.appendChild(commentAuthor);
    const commentContent = document.createElement("p");
    commentContent.classList.add("comment-content");
    commentContent.innerText = comment.body;
    commentDisplay.appendChild(commentContent);
});

    // const commentFormDiv = document.createElement("div");
    // commentFormDiv.classList.add("comment-form-div");
    // mainAlbumElement.appendChild(commentFormDiv);
    // const commentForm = document.createElement("form");
    // commentForm.classList.add("comment-form");
    // commentForm.setAttribute("method", "post");
    // commentFormDiv.appendChild(commentForm);
    // const commentAuthorLabel = document.createElement("label");
    // commentAuthorLabel.classList.add("comment-author-label");


}

const clearChildren = function (element) {
    while (element.firstChild) {
      element.removeChild(element.lastChild);
    }
};

export {albumElement};

/* <body>
    <main class="main-album-content">
    <header class="album-header">
        <h1 class = "album-title">title</h1>
        <h2>artistName</h2>
    </header>

    <div class="track-listing">
        <a>song array</a>
    </div>

    <div class="comments">
        <h3>Average Rating</h3> 
        <p>star rating</p>
        <form>comment form</form>
        <p>comment: author</p>
        <p>comment: headline</p>
        <p>comment: description</p>
    </div>
    <div class="delete-album">
        <button>Delete Album</button>
    </div>
</main>
    
    
</body> */
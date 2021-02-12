import { albumElement } from "./albumElement.js";
import { deleteSong } from "./app.js";
import {addCommentToSong } from "./app.js";

const songElement = function (song) {
  const mainContent = document.querySelector(".main-content");
  clearChildren(mainContent);

  const singleSongElement = document.createElement("div");
  singleSongElement.classList.add("single-song-content");
  mainContent.appendChild(singleSongElement);

  const songHeader = document.createElement("header");
  songHeader.classList.add("song-header");
  singleSongElement.prepend(songHeader);

  const songTitleHeader = document.createElement("h1");
  songTitleHeader.classList.add("song-title-header");
  songTitleHeader.innerText = song.title;
  songHeader.appendChild(songTitleHeader);

  // const songArtistHeader = document.createElement("h2");
  // songArtistHeader.classList.add("song-artist-header");
  // songArtistHeader.innerText = ;
  // songHeader.appendChild(songArtistHeader);

  // const songAlbumHeader = document.createElement("h3");
  // songAlbumHeader.classList.add("song-album-header");
  // songAlbumHeader.innerText = song.albumTitle;
  // songHeader.appendChild(songAlbumHeader);

  const songVideo = document.createElement("div");
  songVideo.classList.add("video-link");
  singleSongElement.appendChild(songVideo);
  const videoEmbed = document.createElement("iframe");
  videoEmbed.classList.add("video-embedded");
  videoEmbed.src = song.videoLink;
  songVideo.appendChild(videoEmbed);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  singleSongElement.appendChild(deleteButton);
  var label = document.createTextNode("Delete");
  deleteButton.appendChild(label);
  deleteButton.addEventListener("click", () => {
    deleteSong(song.id);
    location.reload();
  });

    //comment form
    let commentFormDiv = document.createElement("div");
    commentFormDiv.classList.add("comment-form-div");
    singleSongElement.appendChild(commentFormDiv);
    const commentForm = document.createElement("form");
    commentForm.classList.add("comment-form");
    commentForm.setAttribute("method", "post");
    commentFormDiv.appendChild(commentForm);
  
    const commentAuthorLabel = document.createElement("label");
    commentAuthorLabel.classList.add("comment-author-label");
    commentAuthorLabel.innerText = "Author:";
    commentFormDiv.appendChild(commentAuthorLabel);
  
    let commentAuthorInput = document.createElement("input");
    commentAuthorInput.classList.add("comment-author-input");
    commentAuthorInput.setAttribute("id", "author");
    commentFormDiv.appendChild(commentAuthorInput);
  
    const commentFormBreak = document.createElement("br");
    commentFormDiv.appendChild(commentFormBreak);
  
    const commentBodyLabel = document.createElement("label");
    commentBodyLabel.classList.add("comment-body-label");
    commentBodyLabel.innerText = "Comment:";
    commentFormDiv.appendChild(commentBodyLabel);
  
    const commentBodyInput = document.createElement("input");
    commentBodyInput.classList.add("comment-body-input");
    commentBodyInput.setAttribute("id", "body");
    commentFormDiv.appendChild(commentBodyInput);
  
    const commentFormBreak2 = document.createElement("br");
    commentFormDiv.appendChild(commentFormBreak2);
  
    const commentSubmitButton = document.createElement("button");
    commentSubmitButton.classList.add("comment-submit-button");
    commentSubmitButton.innerText = "Submit Comment";
    commentFormDiv.appendChild(commentSubmitButton);
  
    const commentSubmitButtonLabel = document.createElement("label");
    commentSubmitButtonLabel.classList.add("comment-submit-label");
    commentSubmitButton.appendChild(commentSubmitButtonLabel);
  
    commentSubmitButton.addEventListener("click", () => {
        addCommentToSong(song.id)
        location.reload();
    });

  song.comments.forEach((comment) => {
    const commentDisplay = document.createElement("div");
    commentDisplay.classList.add("comment-display");
    singleSongElement.appendChild(commentDisplay);
    const commentAuthor = document.createElement("p");
    commentAuthor.classList.add("comment-author");
    commentAuthor.innerText = comment.author;
    commentDisplay.appendChild(commentAuthor);
    const commentContent = document.createElement("p");
    commentContent.classList.add("comment-content");
    commentContent.innerText = comment.body;
    commentDisplay.appendChild(commentContent);
  });
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { songElement };

/* <header class="song-header">
        <h1>songTitle</h1>
        <h2>artistName</h2>
        <h3>albumTitle</h3>
    </header>

    <div class="music-video">
        <a>Video</a>
    </div>

    <div class="comments">
        <h3>Average Rating</h3> 
        <p>star rating</p>
        <form>comment form</form>
        <p>comment: author</p>
        <p>comment: headline</p>
        <p>comment: description</p>
    </div>
    <div class="delete-song">
        <button>Delete Song</button>
    </div */

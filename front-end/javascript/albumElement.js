import { addCommentToAlbum, deleteAlbum } from "./app.js";
import { addSongToAlbum } from "./app.js";
import { commentForm } from "./comment.js";
import { mainElement } from "./mainElement.js";
import { songElement } from "./songElement.js";

const albumElement = function (album) {
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

  //tracklist display
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
      songElement(song);
    });
  });

  //add song form
  const songFormDiv = document.createElement("div");
  songFormDiv.classList.add("song-form");
  mainAlbumElement.appendChild(songFormDiv);
  const songForm = document.createElement("form");
  songForm.classList.add("song-form");
  songForm.setAttribute("method", "post");
  songFormDiv.appendChild(songForm);

  const songTitleLabel = document.createElement("label");
  songTitleLabel.classList.add("song-title-label");
  songTitleLabel.innerText = "Song Title:";
  songFormDiv.appendChild(songTitleLabel);

  const songTitleInput = document.createElement("input");
  songTitleInput.classList.add("song-title-input");
  songTitleInput.setAttribute("id", "title");
  songFormDiv.appendChild(songTitleInput);

  const songFormBreak = document.createElement("br");
  songFormDiv.appendChild(songFormBreak);

  const songVideoLabel = document.createElement("label");
  songVideoLabel.classList.add("song-video-label");
  songVideoLabel.innerText = "Song Video (enter URL):";
  songFormDiv.appendChild(songVideoLabel);

  const songVideoInput = document.createElement("input");
  songVideoInput.classList.add("song-video-input");
  songVideoInput.setAttribute("id", "videoLink");
  songFormDiv.appendChild(songVideoInput);

  const songSubmitButton = document.createElement("button");
  songSubmitButton.classList.add("song-submit-button");
  songSubmitButton.innerText = "Submit Song";
  songFormDiv.appendChild(songSubmitButton);

  const songSubmitButtonLabel = document.createElement("label");
  songSubmitButtonLabel.classList.add("song-submit-label");
  songSubmitButton.appendChild(songSubmitButtonLabel);

  songSubmitButton.addEventListener("click", () => {
    addSongToAlbum(album.id);
    location.reload();
  });

  //delete button
  let deleteAlbumButton = document.createElement("button");
  deleteAlbumButton.classList.add("delete-album-button");
  mainAlbumElement.appendChild(deleteAlbumButton);
  var label = document.createTextNode("Delete Album");
  deleteAlbumButton.appendChild(label);
  deleteAlbumButton.addEventListener("click", () => {
    deleteAlbum(album.id);
    location.reload();
  });

  //comment form
  let commentFormDiv = document.createElement("div");
  commentFormDiv.classList.add("comment-form-div");
  mainAlbumElement.appendChild(commentFormDiv);
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

  commentSubmitButton.addEventListener("click", () => {
    addCommentToAlbum(album.id);
    location.reload();
  });

  //comment display
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
};

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export { albumElement };

import {albumElement} from "./albumElement.js";

    const songElement = function(song) {
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
}

const clearChildren = function (element) {
    while (element.firstChild) {
      element.removeChild(element.lastChild);
    }
};

export {songElement} ;


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
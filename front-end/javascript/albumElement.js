const albumElement = function(album) {
    const mainAlbumElement = document.createElement("main");
    mainAlbumElement.classList.add("main-album-content");

    
    const albumHeaderElement = document.createElement("header");
    albumHeaderElement.classList.add("album-header");
    mainAlbumElement.prepend(albumHeaderElement);

    const h1Element = document.createElement("h1");
    h1Element.classList.add("album-title");
    h1Element.innerText = `album`;
    albumHeaderElement.appendChild(h1Element);

}


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
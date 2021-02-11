import { albumElement } from "./albumElement.js";
import { sampleAlbum } from "./sampleAlbum.js";

const mainElement = function(albums) {
    const mainElement = document.createElement("main");
    mainElement.classList.add("main-content");
    const albumSectionElement = document.createElement("section");
    albumSectionElement.classList.add("album-list");
    mainElement.prepend(albumSectionElement);

    albums.forEach((album) => {
        const divElement = document.createElement("div");
        divElement.classList.add("album");


        const imgElement = document.createElement("img");
        imgElement.classList.add("album-image");
        imgElement.src = album.imageUrl;
        imgElement.addEventListener("click", () =>
        albumElement(album));
        divElement.appendChild(imgElement);


        const h2Element = document.createElement("h2");
        h2Element.classList.add("artist-name");
        h2Element.innerText = album.artistName;
        h2Element.addEventListener("click", () =>
        albumElement(album));
        divElement.appendChild(h2Element);

        const h3Element = document.createElement("h3");
        h3Element.classList.add("album-title");
        h3Element.innerText = album.title;
        h3Element.addEventListener("click", () =>
        albumElement(album));
        divElement.appendChild(h3Element);

        const h4Element = document.createElement("h4");
        h4Element.classList.add("record-label");
        h4Element.innerText = album.recordLabel;
        h4Element.addEventListener("click", () =>
        albumElement(album));
        divElement.appendChild(h4Element);

        albumSectionElement.appendChild(divElement);

    });
    return mainElement;
  };
  
export { mainElement };

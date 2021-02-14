import { albumElement } from "./albumElement.js";
import { sampleAlbum } from "./sampleAlbum.js";
import {addNewAlbum} from "./app.js";

const mainElement = function (albums) {
  const mainElement = document.createElement("main");
  mainElement.classList.add("main-content");
  const albumSectionElement = document.createElement("section");
  albumSectionElement.classList.add("album-list");
  mainElement.prepend(albumSectionElement);

  //add album form
  const addAlbumFormDiv = document.createElement("div");
  addAlbumFormDiv.classList.add("album-form");
  albumSectionElement.prepend(addAlbumFormDiv);
  const addAlbumForm = document.createElement("form");
  addAlbumForm.classList.add("album-form");
  addAlbumForm.setAttribute("method", "post");
  addAlbumFormDiv.appendChild(addAlbumForm);

  const albumFormHeader = document.createElement("h2");
  albumFormHeader.classList.add("album-form-header");
  albumFormHeader.innerText = "Add an Album to the Jukebox";
  addAlbumFormDiv.appendChild(albumFormHeader);

  const albumTitleLabel = document.createElement("label");
  albumTitleLabel.classList.add("album-title-label");
  albumTitleLabel.innerText = "Album title:";
  addAlbumFormDiv.appendChild(albumTitleLabel);
  const albumTitleInput = document.createElement("input");
  albumTitleInput.classList.add("album-title-input");
  albumTitleInput.setAttribute("id", "title");
  addAlbumFormDiv.appendChild(albumTitleInput);

  const albumFormBreak = document.createElement("br");
  addAlbumFormDiv.appendChild(albumFormBreak);

  const artistLabel = document.createElement("label");
  artistLabel.classList.add("album-artist-label");
  artistLabel.innerText = "Artist:";
  addAlbumFormDiv.appendChild(artistLabel);
  const artistInput = document.createElement("input");
  artistInput.classList.add("album-artist-input");
  artistInput.setAttribute("id", "artistName");
  addAlbumFormDiv.appendChild(artistInput);

  const albumFormBreak2 = document.createElement("br");
  addAlbumFormDiv.appendChild(albumFormBreak2);

  const recordLabelLabel = document.createElement("label");
  recordLabelLabel.classList.add("record-label-label");
  recordLabelLabel.innerText = "Record Label:";
  addAlbumFormDiv.appendChild(recordLabelLabel);
  const recordLabelInput = document.createElement("input");
  recordLabelInput.classList.add("record-label-input");
  recordLabelInput.setAttribute("id", "recordLabel");
  addAlbumFormDiv.appendChild(recordLabelInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.classList.add("description-label");
  descriptionLabel.innerText = "Description:";
  addAlbumFormDiv.appendChild(descriptionLabel);
  const descriptionInput = document.createElement("input");
  descriptionInput.classList.add("description-input");
  descriptionInput.setAttribute("id", "description");
  addAlbumFormDiv.appendChild(descriptionInput);

  const albumFormBreak3 = document.createElement("br");
  addAlbumFormDiv.appendChild(albumFormBreak3);

  const imageLabel = document.createElement("label");
  imageLabel.classList.add("image-label");
  imageLabel.innerText = "Album image (enter a url):";
  addAlbumFormDiv.appendChild(imageLabel);
  const imageInput = document.createElement("input");
  imageInput.classList.add("image-input");
  imageInput.setAttribute("id", "imageUrl");
  addAlbumFormDiv.appendChild(imageInput);

  const albumFormBreak4 = document.createElement("br");
  addAlbumFormDiv.appendChild(albumFormBreak4);

  const albumSubmitButton = document.createElement("button");
  albumSubmitButton.classList.add("album-submit-button");
  albumSubmitButton.innerText = "Submit Album";
  addAlbumFormDiv.appendChild(albumSubmitButton);

  albumSubmitButton.addEventListener("click", () => {
    addNewAlbum()
    location.reload();
  })


  albums.forEach((album) => {
    const divElement = document.createElement("div");
    divElement.classList.add("album");

    const imgElement = document.createElement("img");
    imgElement.classList.add("album-image");
    imgElement.src = album.imageUrl;
    imgElement.addEventListener("click", () => albumElement(album));
    divElement.appendChild(imgElement);

    const h2Element = document.createElement("h2");
    h2Element.classList.add("artist-name");
    h2Element.innerText = album.artistName;
    h2Element.addEventListener("click", () => albumElement(album));
    divElement.appendChild(h2Element);

    const h3Element = document.createElement("h3");
    h3Element.classList.add("album-title");
    h3Element.innerText = album.title;
    h3Element.addEventListener("click", () => albumElement(album));
    divElement.appendChild(h3Element);

    const h4Element = document.createElement("h4");
    h4Element.classList.add("record-label");
    h4Element.innerText = album.recordLabel;
    h4Element.addEventListener("click", () => albumElement(album));
    divElement.appendChild(h4Element);

    albumSectionElement.appendChild(divElement);
  });
  return mainElement;
};

export { mainElement };

import { createHeader } from "./Header.js";
import { mainElement } from "./mainElement.js";
import { sampleAlbum } from "./sampleAlbum.js";
import { songElement } from "./songElement.js";

const clearChildren = function (element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

let header = createHeader();
const container = document.querySelector(".container");
container.prepend(header);
// const main = mainElement(sampleAlbum);
// container.appendChild(main);
// const footer = createFooter();
// container.appendChild(footer);

const displayHomeView = function (albums) {
  clearChildren(container);
  header = createHeader();
  container.prepend(header);
  let main = mainElement(albums);
  container.appendChild(main);
  // footer = createFooter();
  // container.appendChild(footer);
};

fetch("http://localhost:8080/api/albums/")
  .then((response) => response.json())
  .then((albums) => displayHomeView(albums))
  .catch((error) => console.log(error));

const deleteAlbum = function (id) {
  fetch("http://localhost:8080/api/albums" + "/" + id, {
    method: "DELETE",
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
const deleteSong = function (id) {
  fetch("http://localhost:8080/api/songs" + "/" + id, {
    method: "DELETE",
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const addCommentToAlbum = function (id) {

    fetch("http://localhost:8080/api/albums" + "/" + id + "/" + "comments", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            author: author.value,
            body: body.value
        }),
        
    })
    .then((response) => response.json())
    .then(() => displayHomeView())
    .catch((error) => console.log(error));
}

const addCommentToSong = function (id) {

    fetch("http://localhost:8080/api/songs" + "/" + id + "/" + "comments", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            author: author.value,
            body: body.value
        }),
    })
    .then((response) => response.json())
    .then(() => displayHomeView())
    .catch((error) => console.log(error));
}

export { deleteAlbum };
export { deleteSong };
export {addCommentToAlbum};
export {addCommentToSong};

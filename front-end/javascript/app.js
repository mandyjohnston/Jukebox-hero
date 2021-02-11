import { createHeader } from "./Header.js";
import { mainElement } from "./mainElement.js";
import { sampleAlbum } from "./sampleAlbum.js";
import { albumElement } from "./albumElement.js";


const header = createHeader();
const container = document.querySelector(".container");
container.prepend(header);
const main = mainElement(sampleAlbum);
container.appendChild(main);
// const footer = createFooter();
// container.appendChild(footer);


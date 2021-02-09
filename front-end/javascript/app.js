import { createHeader } from "./Header.js";
import { sampleAlbum } from "./sampleAlbum.js";


const header = createHeader();
const container = document.querySelector(".container");
container.prepend(header);


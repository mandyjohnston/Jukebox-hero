const createHeader = function () {
    const header = document.createElement("header");
    header.classList.add("main-header");
    header.innerHTML = `Jukebox Hero`
    return header;
  };
  
  export { createHeader };
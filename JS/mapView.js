window.onload = function () {
  view();
}

let searchTerm = '';

function view() {
  let app = document.getElementById("app");
  let html = /*HTML*/ ``;

  html += /*HTML*/ `
        <input id="searchField" type="text" onchange="searchTerm = this.value" style = "font-size: 100;" />
        <button id="searchButton" onclick="searchFunc()" style = "font-size: 100;">Søk</button>
    `;
  console.log("laster");
  app.innerHTML = html;

  console.log(searchTerm);
}

function searchFunc() {
  request.query = searchTerm;
  placeSearch()
}
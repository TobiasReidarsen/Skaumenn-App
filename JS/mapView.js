window.onload = function () {
  view();
}

function view() {
  let app = document.getElementById("app");
  let html = /*HTML*/ ``;

  html += /*HTML*/ `
        <input id="searchField" type="text" onchange="model.mapState.currentSearch = this.value" style = "font-size: 100;" value = ''/>
        <button id="searchButton" onclick="searchFunc()" style = "font-size: 100;">Søk</button>
    `;
  console.log("laster");
  app.innerHTML = html;

  
}

function searchFunc() {
  let searchTerm = model.mapState.currentSearch;
  let searchHistory = model.mapState.searchHistory;

  searchHistory.push(searchTerm);

  console.log(searchTerm);
  request.query = searchTerm;
  placeSearch();
  view();
}
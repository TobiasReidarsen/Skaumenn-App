window.onload = function () {
  view();
}
function view() {
  let app = document.getElementById("app");
  let html = /*HTML*/ ``;

  html += /*HTML*/ `
        <input id="searchField" type="text" onchange="model.mapState.currentSearch = this.value" style = "font-size: 20;" value = ''/>
        <button id="searchButton" onclick="searchFunc()" style = "font-size: 20;">Søk</button>
        <button id = "infoside" onclick = "infoView()">Infoside</button>
        <button id = "flott" onclick = "plaserPin(this.id)">Skaumenn</button>
        <button id = "sykdom" onclick = "plaserPin(this.id)">Sykdom</button>
    `;
  app.innerHTML = html;


}

function searchFunc() {

  let curPage = model.navigationState.currentPage;
  let searchTerm = model.mapState.currentSearch;

  if (curPage == 'mapPage') {
    if (searchTerm != '') {

      let searchHistory = model.mapState.searchHistory;
      let prevSearch = model.mapState.prevSeach;

      searchHistory.push(searchTerm);

      request.query = searchTerm;

      if (searchHistory.length > 1) {
        model.mapState.prevSeach = model.mapState.searchHistory.at(-2);
      }
      placeSearch();
    } else {
      console.log('Søkerfelt kan ikke være tomt');
    }
  } else if (curPage == 'infoPage') {
    model.navigationState.currentPage = 'mapPage';
    console.log(curPage == 'infoPage');
    console.log(curPage);
    if (searchTerm != '') {
      searchFunc();
      console.log("InfoSearch");
    } else {
      searchFunc();
    }

  }
  view();
}

function plaserPin(id) {
  alert("Trykk på kartet for å plasere en pin");

  if (id == "flott") {
    model.mapState.flott = true;
    return;
  } 
  model.mapState.sykdom = true;
}
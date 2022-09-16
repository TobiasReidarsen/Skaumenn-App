window.onload = function () {
  view();
}
function view() {
  let app = document.getElementById("app");
  let html = /*HTML*/ ``;

  if (model.navigationState.currentPage == 'mapPage') {

    html += /*HTML*/ `
    <input type="image" src="/img/see.webp" class="open-button" onclick="changeForm()"/>

<div class="form-popup" id="myForm">
    <input id="searchField" type="text" onchange="model.mapState.currentSearch = this.value" style = "font-size: 20;" value = ''/>
    <button id="searchButton" onclick="searchFunc()" style = "font-size: 20;">Søk</button>
  </form>
</div>

        <button id = "infoside" onclick = "infoView()">Infoside</button>
        <button id = "flott" onclick = "plaserPin(this.id)">Skaumenn</button>
        <button id = "sykdom" onclick = "plaserPin(this.id)">Sykdom</button>
        <button id= "loggInn" onclick = loginView()>Logg in</button>
    `;
  }
    app.innerHTML = html;
  

}
function changeForm() {
  if (document.getElementById("myForm").style.display = "none"){
   document.getElementById("myForm").style.display = "block";
  }
  if(document.getElementById("myForm").style.display = "block"){
   document.getElementById("myForm").style.display = "none";
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// window.onload = function(){ 
// }
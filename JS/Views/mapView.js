window.onload = function () {
  view();
}


function view() {
  let app = document.getElementById("app");
  let html = /*HTML*/ ``;

  if (model.navigationState.currentPage == 'mapPage') {

    html += /*HTML*/ `
    

  <div class="form-popup" id="myForm">
    <input id="searchField" type="text" onchange="model.mapState.currentSearch = this.value" style = "font-size: 20;" value = ''/>
    <button id="searchButton" onclick="searchFunc()" style = "font-size: 20;">Søk</button>
  </form>
</div>

        <input type="image" src="./img/see.webp" class="open-button" onclick="changeForm()" />
        <input id = "infoside" type="image" src="./img/info.jpg" class="info-button" onclick = "infoView()">
        <!--button id = "infoside" onclick = "infoView()">Infoside</button-->
        <input id="flott" type="image" src="./img/flott.jpg" class ="tick-button" onclick = "plaserPin(this.id)">
        <!--button id = "flott" onclick = "plaserPin(this.id)">Skaumenn</button-->
        <input  id="sykdom" type="image" src="./img/istockphoto-1269722577-1024x1024.jpg" class ="sick-button"  onclick = "plaserPin(this.id)">
        <!--button id = "sykdom" onclick = "plaserPin(this.id)">Sykdom</button-->
        <input  id="loggInn"type="image" src="./img/log-inn.png" class ="login-button"  onclick = loginView()>
        <!--button id= "loggInn" onclick = loginView()>Logg inn</button-->

        <div id ="sickDropDown" class = "dropdown-content"style="display: none;"> 
        <select id="sickness" name="sickness" onchange="registerSick()">
        <option>Skogflåttencefalitt(TBE)</option>
        <option>Lyme borreliose</option>
        <option>Anaplasmose</option>
        <option>Babesiose</option>
        <option>Harepest</option>
        <option>Annet</option>
        </select><br>
        <button id="closThisThing" onclick ="closeSelect()">register</button></div>
    `; 
  }
  app.innerHTML = html;

}
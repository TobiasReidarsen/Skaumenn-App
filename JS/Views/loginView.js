function loginView() {
    model.navigationState.currentPage = 'loginView';
    let appLogin = document.getElementById("map");
    let sdsdLogin = document.getElementById("app");
    let htmlLogin = /*HTML*/ ``;
    let htmlLogin1 = /*HTML*/ ``;

    htmlLogin +=/*HTML*/ `
    <input type="text" placeholder="Brukernavn" onchange ="model.input.tempLogInnput.brukernavn = this.value"/>
    <br>
    <input type="text" placeholder="Passord" onchange ="model.input.tempLogInnput.passord = this.value"/>
    <br>
    <button onclick="logInn()">Logg inn</button>
    <button onclick="registrer()">Lag bruker</button>
    <button onclick="backToMap()">Tilbake</button>
    `;



    appLogin.innerHTML = htmlLogin;
    sdsdLogin.innerHTML = htmlLogin1;
}
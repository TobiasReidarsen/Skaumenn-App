// VIEW
window.onload = function () {
    mapView();
    generatorMethods.tick();
}

function mapView() {
    app = document.getElementById("app");
    let html = /*HTML*/``;

    html += /*HTML*/ `
        <div></div>
    `;

    app.innerHTML = html;
}
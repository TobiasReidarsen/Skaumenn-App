window.onload = function () {
    view();
}

function view(){
    let app = document.getElementById("app");
    let html = /*HTML*/``;

    html += /*HTML*/`
        <input type="text" />
    `;
    console.log("laster");
    app.innerHTML = html;
}
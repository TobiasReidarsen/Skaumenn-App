function infoView() {

    model.navigationState.currentPage = 'infoPage';
    let appInfo = document.getElementById("map");
    let sdsdinfo = document.getElementById('app');
    let htmlInfo = /*HTML*/ ``;
    let htmlinfo1 = /*html*/  ``;

    htmlInfo += /*HTML*/ `
        <h4 style= color:white;>Hva er flått</h4>
        <p style= "color: grey;
        max-width: 80%; margin-left: auto; margin-right:auto;">Skogflått er en midd. Den har åtte bein, og ikke noe tydelig skille mellom hode, bryst og bakkropp. 
        Alle midd hører til edderkoppdyrene, og er ikke insekter. 
        Edderkoppdyrene har åtte bein i motsetning til insektene som har seks bein. Edderkoppdyrene har heller ingen antenner.

        Skogflåtten har fire utviklingsstadier; egg, larve, nymfe og voksen. Larven er bare 0,5 mm lang. Det spesielle er at flåttlarven, som alle middlarver, bare har tre par bein. 
        Nymfene er ca. 1,5 mm. De voksne hannene er 2-3 mm og gråsvarte, mens de voksne hunnene er 3–4 mm med svart hode og bein og brunrød bakkropp. 
        Fullsugd av blod kan imidlertid hunnen bli inntil 1,5 cm lang, og bakkroppen får da en gråblå farge.</p>
        <h4 style= color:white;>Slik fjerner du flått:</h4>
        <p style= "color: grey;
        max-width: 80%; margin-left: auto; margin-right:auto;">
        Bruk fingrene, en pinsett eller en flåttfjerner som du kjøper på apoteket. Ta tak i flåttnymfen helt nede ved huden og dra den rett ut. Voksne flått kan med fordel vris litt samtidig som de trekkes ut. Det har liten betydning om deler av flåttens biteredskaper blir sittende igjen i huden.
        Du kan gjerne legge på litt desinfiserende sårsalve på bittstedet.</p>
        <h4 style= color:white;>Sykdommer som man kan få fra flåttbitt</h4>
        <p style= "color: grey;
        max-width: 80%; margin-left: auto; margin-right:auto;">Skogflåttencefalitt(TBE)</br>
        Lyme borreliose</br>
        Anaplasmose</br>
        Babesiose</br>
        Harepest</p>
        <p style= "color: grey;
        max-width: 80%;">Informasjon hentet fra <a href="https://www.fhi.no/ml/skadedyr/flatt/">Folkehelseinstituttet</a></p>
        <button onclick="backToMap()">Tilbake</button>
    `;

    appInfo.innerHTML = htmlInfo;
    sdsdinfo.innerHTML = htmlinfo1;
}

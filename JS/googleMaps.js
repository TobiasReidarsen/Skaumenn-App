// Initialize and add the map

let circleRadius = 20;        //Either input or state
let map = null;               //STATE
let request = null;           //STATE
let service = null;           //STATE
let marker = null;            //STATE
let orignialPosition = null;  //STATE
let markers = [];             // DATA
let markersWithinRadius = []; // DATA
let latLng = null;            // DATA
let firebaseLatLngList = [];  // la pusher info fra databasen inn i den fra loginncontroller.
let mapCenter = null;
let antennasCircle = null;

//initFirebase();
function initFirebase() {

    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDJ4vWW6TvhYkuUJ2-AsWW86WWcmuvAXOc",
        authDomain: "skaumann-1a4c3.firebaseapp.com",
        projectId: "skaumann-1a4c3",
        storageBucket: "skaumann-1a4c3.appspot.com",
        messagingSenderId: "327357552338",
        appId: "1:327357552338:web:c47119cbf5e8e87711ff0b"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const firestore = app.firestore();
}

function readUserFirestore() {
    firestore.collection('users').then((allUsers) => {
        let allUserObj = allUsers.data();
        allUserObj.map((userObj) => {
            let userNameMatch = userObj.username == brukernavn;
            let passwordMatch = userObj.password == passord;
            if (userNameMatch && passwordMatch) {
                loggetinn();
                return;
            }
        });
    });
}



function writeUserFirestore(userObj) {
    // userObj {username: 'dreag', passord:'raegad', også videre}
    firestore.collection('users').set(userObj);
}

function updateUserFirestore(userObj, userID) {
    //userObj er et object {}
    firestore.collection('users').doc(userID).update(userObj);
}

function initMap() {

    // Create a map centered in Pyrmont, Sydney (Australia).
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.0585, lng: 10.0194 },
        zoom: 9
    });

    map.addListener("click", (event) => {
        map.setZoom(8);
        let latitude = event.latLng.lat();
        let longitude = event.latLng.lng();

        mapCenter = { lat: latitude, lng: longitude };

        latLng = new google.maps.LatLng(latitude, longitude);
        marker.setMap(null);
        marker = new google.maps.Marker({
            position: latLng,
            title: "Hello World!"
        });
        //marker.setMap(map);
        map.setCenter(marker.position);
        confirmPin();
        //comparePinLocation();
        createCircle();
        checkIfMarkerisWithinDistance();
    });

    request = {
        location: map.getCenter(),
        radius: '500',
        query: 'larvik'
    }

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);

    map.addListener('zoom_changed', () => {
        // let zoom = map.zoom;
        // console.log(zoom + "Her er zoom");
        // if (zoom > 10) {
        //displayMarkers();
        // }
        // console.log(map.zoom + "zoom");
    });

}
// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {


    if (status == google.maps.places.PlacesServiceStatus.OK) {
        setMarker(results);
        setMarkerLocation();
    }
}

function setMarker(results) {
    if (results != null) {
        marker = new google.maps.Marker({
            map: map,
            place: {
                placeId: results[0].place_id,
                location: results[0].geometry.location
            }
        });
    }
    setMapLocation();
}

function setMarkerLocation() {
    marker.setPosition(marker.place.location);
}

function newSetMarkerLocation() {
    marker.setMap(null);
}

function setMarkerByClick(locObj) {
    marker.setMap(locObj);
}

function setMapLocation() {
    map.setCenter(marker.place.location);
}

function clearMarkers() {
    newSetMarkerLocation();
}

function setRequest(locationParam, radiusParam, queryParam) {
    request = {
        location: locationParam,
        radius: radiusParam,
        query: queryParam
    }
}

function placeSearch() {

    clearMarkers();
    service.textSearch(request, callback);
}

function comparePinLocation() {
    for (let i = 0; i < markers.length; i++) {
        let pinLat = markers.position.lat();
        let pinLng = markers.position.lng();
        // console.log(pinLat);
        if (calculateDistance(pinLat, pinLng, mapCenter.lat, mapCenter.lng) <= 10) {
            displayMarkersFromFirebase(pinLat, pinLng);
        }
    }
}

function createCircle() {
    if (antennasCircle != null) {
        antennasCircle.setMap(null);
    }
    antennasCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
        center: mapCenter,
        radius: 1000 * 10
    });
    map.fitBounds(antennasCircle.getBounds());
}

//Calculate distance between 2 points, or two latlng in km
function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}

function checkIfMarkerisWithinDistance() {
    hideMarkers();
    
    markers.map((mark) => {
        let distance = calculateDistance(mapCenter.lat, mapCenter.lng, mark.position.lat(), mark.position.lng());
        if (distance <= 10) {
            markersWithinRadius.push(mark);
        }
    });
    displayNearbyMarkers();
}

function hideMarkers(){
    for (let i = 0; i < markersWithinRadius.length; i++) {
        markersWithinRadius[i].setMap(null);
    }

    markersWithinRadius = [];
}

// asks if the user wants to place a skaumenn pin
function confirmPin() {

    if (model.mapState.sykdom || model.mapState.flott) {

        if (model.mapState.sykdom) {
            let sykdom = prompt('Beskriv syktomen her: ');

            model.input.userInput.describedSymtoms = sykdom;
            console.log(model.input.userInput.describedSymtoms);
            model.mapState.sykdom = false;
        }
        markers.push(marker);
        window.writeCasesFirestore(marker);
        displayMarkers();
        return;
    }

}

function displayMarkers() {
    let zoom = map.getZoom();
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(map);

        }
}

function displayNearbyMarkers() {
    for (let i = 0; i < markersWithinRadius.length; i++) {
        markersWithinRadius[i].setMap(map);

    }
}

function displayMarkersFromFirebase(pinLatParam, pinLngParam) {
    if (map.zoom > 10) {
        let pinlatLng = new google.maps.LatLng(latitude, longitude);
        let pinmarker = new google.maps.Marker({
            position: latLng,
            title: "Hello World!"
        });
    }


}

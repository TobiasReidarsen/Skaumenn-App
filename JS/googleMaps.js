// Initialize and add the map

let map = null;
let request = null;
let service = null;
let marker = null;
let markers = [];
let latLng = null;

function initMap() {
    // Create a map centered in Pyrmont, Sydney (Australia).
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 59.0585, lng: 10.0194 },
        zoom: 9
    });

    map.addListener("click", (event) => {
        map.setZoom(8);
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();

        latLng = new google.maps.LatLng(latitude, longitude);
        marker.setMap(null);
        marker = new google.maps.Marker({
            position: latLng,
            title: "Hello World!"
        });
        marker.setMap(map);
        map.setCenter(marker.position);
        confirmPin(marker);
    });

    request = {
        location: map.getCenter(),
        radius: '500',
        query: 'Herre'
    }

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);

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
    // if (n == 0) {
    initMap();
    // }
}

function updatePin() {

}

function updatePinRadius() {

}

// asks if the user wants to place a skaumenn pin
function confirmPin(marker) {
    let plaserPinValg = confirm('Vil du plasere en pin her?');
    if (plaserPinValg) {
        markers.push(marker);
        let sickAsk = confirm('Ble du syk?');

        if (sickAsk) {
            let sykdom = prompt('Beskriv syktomen her: ');
            model.input.userInput.describedSymtoms = sykdom;
            console.log(model.input.userInput.describedSymtoms);
        }

        displayMarkers();
        initMap();
    }
}

function displayMarkers(){
    for (let i = 0; i < markers.length; i++){
        new google.maps.Marker({
            position: markers[i].position.latLng,
            map,
        })
    }
}
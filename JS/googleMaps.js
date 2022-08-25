// Initialize and add the map

let map = null;
let request = null;
let service = null;
let marker = null;

function initMap() {
    // Create a map centered in Pyrmont, Sydney (Australia).
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.89555 , lng: 31.97508 },
        zoom: 7
    });

    request = {
        location: map.getCenter(),
        radius: '500',
        query: 'Chad'
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

function setMarker(results){
    if(results != null){
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
    marker.setMap(map);
}

function newSetMarkerLocation(){
    marker.setMap(null);
}

function setMapLocation() {
    map.setCenter(marker.place.location);
}

function clearMarkers(){
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

function updatePin() {

}

function updatePinRadius() {

}

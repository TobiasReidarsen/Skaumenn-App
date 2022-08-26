// Initialize and add the map

let map = null;
let request = null;
let service = null;
let marker = null;
let latLng = null;

function initMap() {
    // Create a map centered in Pyrmont, Sydney (Australia).
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -15.958, lng: -5.698 },
        zoom: 7
    });

    map.addListener("click", (event) => {
        map.setZoom(8);
        var latitude = event.latLng.lat();
        var longitude = event.latLng.lng();

        latLng = new google.maps.LatLng(latitude, longitude);
        marker.setMap(null);
        marker = new google.maps.Marker({
            position: latLng,
            title:"Hello World!"
        });
        marker.setMap(map);
        map.setCenter(marker.position);
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
    marker.setPosition(marker.place.location);
}

function newSetMarkerLocation(){
    marker.setMap(null);
}

function setMarkerByClick(locObj){
    marker.setMap(locObj);
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

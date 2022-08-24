// Initialize and add the map

let map;
let request;
let service;

function initMap() {
    // Create a map centered in Pyrmont, Sydney (Australia).
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.8666, lng: 151.1958 },
        zoom: 15
    });

    request = {
        location: map.getCenter(),
        radius: '500',
        query: 'Oslo'
    }
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);

}
// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {


    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
            map: map,
            place: {
                placeId: results[0].place_id,
                location: results[0].geometry.location
            }
        });

        setMarkerLocation(marker);
        setMapLocation(results);
    }
}

function setMarkerLocation(marker) {
    marker.setMap(map);
}

function setMapLocation(results) {
    map.setCenter(results[0].geometry.location);
}

function setRequest(locationParam, radiusParam, queryParam) {
    request = {
        location: locationParam,
        radius: radiusParam,
        query: queryParam
    }
}

function placeSearch() {
    service.textSearch(request, callback);
}

function updatePin() {

}

function updatePinRadius() {

}
function backToMap(){
    model.navigationState.currentPage = 'mapPage';
    view();
    initMap();
}
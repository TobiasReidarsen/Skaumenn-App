function backToMap(){
    model.navigationState.currentPage = 'mapPage';
    view();
    placeSearch();
}
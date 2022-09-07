function searchFunc() {

    let curPage = model.navigationState.currentPage;
    let searchTerm = model.mapState.currentSearch;
  
    if (curPage == 'mapPage') {
      if (searchTerm != '') {
  
        let searchHistory = model.mapState.searchHistory;
        let prevSearch = model.mapState.prevSeach;
  
        searchHistory.push(searchTerm);
  
        request.query = searchTerm;
  
        if (searchHistory.length > 1) {
          model.mapState.prevSeach = model.mapState.searchHistory.at(-2);
        }
        placeSearch();
      } else {
        console.log('Søkerfelt kan ikke være tomt');
      }
    } else if (curPage == 'infoPage') {
      model.navigationState.currentPage = 'mapPage';
      console.log(curPage == 'infoPage');
      console.log(curPage);
      if (searchTerm != '') {
        searchFunc();
        console.log("InfoSearch");
      } else {
        searchFunc();
      }
  
    }
    view();
  }
  
  function plaserPin(id) {
    alert("Trykk på kartet for å plasere en pin");
  
    if (id == "flott") {
      model.mapState.flott = true;
      return;
    } 
    model.mapState.sykdom = true;
  }
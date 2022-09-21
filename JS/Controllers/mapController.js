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

function plaserPin(id) { // bestemmer om det skal være en pin for flott ellet sykdom.
  alert("Trykk på kartet for å plasere en pin");

  if (id == "flott") {
    model.mapState.flott = true;

    return;
  }
  model.mapState.sykdom = true;
  let x = document.getElementById("sickDropDown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function registerSick(){
  let selectBox = document.getElementById("sickness");
  let selectedValue = selectBox.options[selectBox.selectedIndex].text;
  model.users[0].userInfo.sickness = selectedValue;
  console.log(model.users[0].userInfo.sickness);  
}

function closeSelect(){
  let x = document.getElementById('sickDropDown');
  x.style.display = "none";
}

function changeForm() {
  console.log("kjører");
  let x = document.getElementById('myForm');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
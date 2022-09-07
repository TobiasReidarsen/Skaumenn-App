function logInn() {
    let tempUsername = model.input.tempLogInnput.brukernavn; 
    let tempPass = model.input.tempLogInnput.passord; 

    let realUser = model.input.loginInput.userName;
    let realPas = model.input.loginInput.passWord;
    
    console.log(tempUsername, tempPass, realPas, realUser);

    if ((tempUsername == realUser) &&(tempPass == realPas)){
        console.log("Logged inn som bruker: " + realUser  + " med passord: " + realPas);
    }
}
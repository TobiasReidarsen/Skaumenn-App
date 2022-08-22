/*
Hei og takk for mail

Beklager sient svar. Dere må bare "purre på meg" i discord når jeg er treig. 

Syns det dere beskriver over ser veldig fint ut. Når det gjelder spørsmålet deres så tenker jeg de godt kan ha blomster navn som dere foreslår eller tall eller noe så lenge de er anonyme. 
Evt at de kan lage brukernavn. Det er ikke så viktig for meg så lenge de er anonyme. Tenker de er viktigst da få har lyst å f.eks få navnet sitt registret der med at de har fått den eller den sykdommen. 

Mvh Anita
*/

const model = {
    //State
    app: {
        loginState: {
            username: '',
            loggedIn: false,
            withoutAccount: false,
            register: false
        },
        mapState: {
            currentSearch: '',
            prevSeach: '',
            mapPin: false,
            mapPinLongitude: 0,
            mapPinLatitude: 0,
        },
        navigationState: {
            currentPage: '',
        },
    },
    //Input
    input: {
        //TODO: maybe add in email too
        loginInput: {
            userName: '',
            passWord: '',
            continueButton: false,
            loginButton: false,
            registerButton: false
        },

        //TODO: Maybe should be in state instead
        userInput: {
            seenTickButton: false,
            bittenButton: false,
            sickButton: false,
            describedSymtoms: ''
        },

        mapInput: {
            searchTerm: '',
            searchButton: false,
        },

        navigationInput: {
            navigatrTo: '',
        },
    },

    //Data / Database
    data: {
        users: {
            bruker1: {
                password: '',
                userInfo: {
                    seenTick: false,
                    bitten: false,
                    sick: false,
                    //TODO: peoples history will remain anonymous, there will be a function in controller that just loops over every history
                    history: [0, 1]
                },
            },

            bruker2: {
                password: '',
                userInfo: {
                    seenTick: false,
                    bitten: false,
                    sick: false,
                    //TODO: peoples history will remain anonymous, there will be a function in controller that just loops over every history
                    history: [2]
                },
            },
        },

        cases: [
            {
                date: new Date,
                duration: 0,
                symtoms: '',
            },
            {
                date: new Date,
                duration: 0,
                symtoms: '',
            },
            {
                date: new Date,
                duration: 0,
                symtoms: '',
            },
        ],

        pages: {
            loginPage: {
                url: '',
            },
            registerPage: {
                url: '',
            },
            mapPage: {
                url: '',
                //Tempoerarily, TODO: maybe add in google maps in the future
                mapImage: '/img/map.jpg'
            },
            mainPage: {
                url: '',
            },
            infoPage: {
                url: '',
            },
        },
        tickInfo: '',
    }

}
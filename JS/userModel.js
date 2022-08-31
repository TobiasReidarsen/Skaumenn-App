const model = {
    //State
    //app
    loginState: {
        currentuserId: 1,
        username: '',
        loggedIn: false,
        withoutAccount: false,
        register: false
    },
    mapState: {
        searchHistory: [],
        currentSearch: '',
        prevSeach: '',
        mapPin: false,
        mapPinLongitude: 0,
        mapPinLatitude: 0,
        sykdom: false,
        flott: false,
    },
    navigationState: {
        currentPage:'mapPage'
    },
    //},
    //Input
    input: {
        //TODO: maybe add in email too
        loginInput: {
            userName: 'Person1',
            passWord: 'abc',
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
            navigateTo: '',
        },
    },

    //Data / Database

    users: [{
        id: 1,
        username: "person1",
        password: 'abc',
        userInfo: {
            seenTick: false,
            bitten: false,
            sick: false,
            //TODO: peoples history will remain anonymous, there will be a function in controller that just loops over every history
            history: [0, 1]
        },
    },

    {
        id: 2,
        username: "person2",
        password: '123',
        userInfo: {
            seenTick: true,
            bitten: true,
            sick: false,
            //TODO: peoples history will remain anonymous, there will be a function in controller that just loops over every history
            history: [2]
        },
    },
    ],

    cases: [{
        date: "22.08.22",
        duration: 0,
        symtoms: 'Ble syk',
        lat: 59.142590,
        lng: 10.187550
    },
    {
        date: "12.05.22",
        duration: 0,
        symtoms: 'Kløe, feber',
        lat: 59.146196,
        lng: 10.186502
    },
    {
        date: "01.01.22",
        duration: 0,
        symtoms: 'Smerter i heile kroppen',
        lat: 59.146196,
        lng: 10.186502
    },
    ],

    /*         pages: {
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
            }, */
    tickInfo: 'Lorem ipsum and stuff',


}
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
                continueButton: false,
                loginButton: false,
                registerButton: false
            },

            tempLogInnput:{
                brukernavn: 'feil',
                passord: 'feil',
            },

            //TODO: Maybe should be in state instead
            userInput: {
                seenTickButton: false,
                bittenButton: false,
                sickButton: false,
                describedSymtoms: '',
                chooseSickness: ['Skogflåttencefalitt(TBE)','Lyme borreliose', 'Anaplasmose', 'Babesiose', 'Harepest','Annet']
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
            username: "noe",
            password: '123456',
            userInfo: {
                seenTick: false,
                bitten: false,
                sick: false,
                sickness: '',
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
                sickness: '',
                //TODO: peoples history will remain anonymous, there will be a function in controller that just loops over every history
                history: [2]
            },
        },
        ],

        cases: [],

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
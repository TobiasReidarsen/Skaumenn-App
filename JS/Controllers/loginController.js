
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getFirestore, doc, getDocs, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, GeoPoint } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

let fireBaseCases = null;
// let firebaseLatLngList = [];
//let firebaseLatLngList = [];
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ4vWW6TvhYkuUJ2-AsWW86WWcmuvAXOc",
    authDomain: "skaumann-1a4c3.firebaseapp.com",
    projectId: "skaumann-1a4c3",
    storageBucket: "skaumann-1a4c3.appspot.com",
    messagingSenderId: "327357552338",
    appId: "1:327357552338:web:c47119cbf5e8e87711ff0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var db = getFirestore();

const usersRef = collection(db, 'users');

const casesRef = collection(db, 'cases');

getDocs(casesRef).then((casesList) => {
    casesList.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        fireBaseCases = doc.data();
        // firebaseLatLngList.push(fireBaseCases.place);
        model.cases.push(fireBaseCases);
        console.log(model.cases.at(-1));
    
    });

updateFireBaseLatLngList();
    displayMarkers();
})
.catch((error) => {
    console.log(error);
});

const allUsersList = await getDocs(usersRef);
allUsersList.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
});

var readUsersObj = function (username, password) {
    allUsersList.forEach((doc) => {
        let data = doc.data();
        if (data.username == username && data.password == password) {
            console.log('du er logget inn');
        }
    });
}

// allCasesList.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//     fireBaseCases = doc.data();
//     // firebaseLatLngList.push(fireBaseCases.place);
//     model.cases.push(fireBaseCases);
//     console.log(model.cases.at(-1));

// });

function updateFireBaseLatLngList() {
    for (let i = 0; i < model.cases.length; i++) {
        firebaseLatLngList.push({ lat: model.cases[i].place._lat, lng: model.cases[i].place._long });
        const storedMarker = new google.maps.Marker({
            position: { lat: firebaseLatLngList[i].lat, lng: firebaseLatLngList[i].lng }, 
            map
        });
        markers.push(storedMarker);
        console.log(firebaseLatLngList[0]);
        
        // return;
    }
}

console.log(fireBaseCases.place);

function writeCasesFirestore(markerParam) {
    // let lat = marker.position.lat();
    // console.log(lat);
    addDoc(casesRef, {
        date: new Date(),
        duration: 3,
        place: new GeoPoint(markerParam.position.lat(), markerParam.position.lng()),
        symtoms: "something"
    });
}

window.readUsersObj = readUsersObj;
window.writeCasesFirestore = writeCasesFirestore;
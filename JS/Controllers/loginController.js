
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getFirestore, doc, getDocs, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, GeoPoint, arrayUnion } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

let userID = 'AmTKFWJHAtzLyyOUauIu';
let fireBaseCases = null;
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
        fireBaseCases = doc.data();
        
        model.cases.push(fireBaseCases);
    });

    updateFireBaseLatLngList();
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

function updateFireBaseLatLngList() {
    for (let i = 0; i < model.cases.length; i++) {
        const storedMarker = new google.maps.Marker({
            position: { lat: model.cases[i].place._lat, lng: model.cases[i].place._long }
        });
        markers.push(storedMarker);
        
    }
}


function writeCasesFirestore(markerParam) {
    addDoc(casesRef, {
        date: new Date(),
        duration: 3,
        place: new GeoPoint(markerParam.position.lat(), markerParam.position.lng()),
        symtoms: "something"
    }).then((documentObj) => {
        referenceCaseToUser(documentObj.id);
    });
}

function referenceCaseToUser(docID){
    updateDoc(doc(db, "users", userID), {
        cases: arrayUnion(doc(db, "cases", docID))
    });
}

window.readUsersObj = readUsersObj;
window.writeCasesFirestore = writeCasesFirestore;
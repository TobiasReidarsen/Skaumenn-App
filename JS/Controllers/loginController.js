
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getFirestore, doc, getDocs, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

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

const allUsersList = await getDocs(usersRef);
allUsersList.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

var readUsersObj = function(username, password){
    allUsersList.forEach((doc) => {
        let data = doc.data();
        if(data.username == username && data.password == password){
            console.log('du er logget inn');
        }
    });
}

window.readUsersObj = readUsersObj;




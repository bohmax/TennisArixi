import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH-TcPASZAGFQU5JjkkrImhLRj6a50btA",
    authDomain: "test-tennis-6b716.firebaseapp.com",
    projectId: "test-tennis-6b716",
    storageBucket: "test-tennis-6b716.appspot.com",
    messagingSenderId: "416414686555",
    appId: "1:416414686555:web:4569b86c7af753a97a0e7e",
    databaseURL: "https://test-tennis-6b716-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = app.database()
export const utenti = db.ref('Utenti')

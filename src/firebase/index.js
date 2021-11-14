import firebase from 'firebase/compat/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH-TcPASZAGFQU5JjkkrImhLRj6a50btA",
    authDomain: "test-tennis-6b716.firebaseapp.com",
    projectId: "test-tennis-6b716",
    storageBucket: "test-tennis-6b716.appspot.com",
    messagingSenderId: "416414686555",
    appId: "1:416414686555:web:4569b86c7af753a97a0e7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
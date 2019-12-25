import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBZzZkUlkeaJ2B7mQFiqv2kSwTzqizOK44",
    authDomain: "contactbook-d75ff.firebaseapp.com",
    databaseURL: "https://contactbook-d75ff.firebaseio.com",
    projectId: "contactbook-d75ff",
    storageBucket: "contactbook-d75ff.appspot.com",
    messagingSenderId: "927869458248",
    appId: "1:927869458248:web:5c8fbbacf9c4261358857d",
    measurementId: "G-05ER2CKH96"
};

firebase.initializeApp(config);

export default firebase;

import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyC9iR4Vws4atkhRzX1VFo3qu74gP118ClA",
    authDomain: "switch-3720e.firebaseapp.com",
    databaseURL: "https://switch-3720e.firebaseio.com",
    projectId: "switch-3720e",
    storageBucket: "switch-3720e.appspot.com",
    messagingSenderId: "553223675043"
};
var Firestore = firebase.initializeApp(config);
export default Firestore;
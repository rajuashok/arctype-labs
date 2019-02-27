import firebase from 'firebase'
// TODO(super-abs): update this config for Firestore
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
var Firestore = firebase.initializeApp(config);
export default Firestore;
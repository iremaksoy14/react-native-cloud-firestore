import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "apikey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "G-ZNNET9SQ97"
    
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCLjayS7vK4UX-s92fLJGuCMx_3svUl8h4",
    authDomain: "cora-email-list.firebaseapp.com",
    databaseURL: "https://cora-email-list-default-rtdb.firebaseio.com",
    projectId: "cora-email-list",
    storageBucket: "cora-email-list.appspot.com",
    messagingSenderId: "116759557541",
    appId: "1:116759557541:web:d71bd7a8cd09dc51cd644c",
    measurementId: "G-94CRJDSSXE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase

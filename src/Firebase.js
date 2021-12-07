import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


import './Firebase.js'

    <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

    

  var firebaseConfig = {
    apiKey: "AIzaSyBHblLUSYrM-tBvfIzz98wVgtYshkSCTyI",
    authDomain: "liga-pokemon.firebaseapp.com",
    projectId: "liga-pokemon",
    storageBucket: "liga-pokemon.appspot.com",
    messagingSenderId: "1039809389410",
    appId: "1:1039809389410:web:8ffdd34a4c0649ca9c023b"
  };

  const fb = firebase.initializeApp(firebaseConfig);


  

  export const auth = fb.auth()
  export const db = fb.firestore()


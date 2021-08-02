import firebase from 'firebase/app'
import 'firebase/auth' ;
import 'firebase/firestore' ;
import { useHistory } from 'react-router';


//https://iitg-unstuck.herokuapp.com/
var config = {
    apiKey: "AIzaSyDKnjH3hjbdxVfAwhTmbFvK8GFyidZDRNM",
    authDomain: "unstuck-71fc4.firebaseapp.com",
    projectId: "unstuck-71fc4",
    storageBucket: "unstuck-71fc4.appspot.com",
    messagingSenderId: "72165561590",
    appId: "1:72165561590:web:c4cabb12beb386639708d7",
    measurementId: "G-ZFK0WDH1MV"
  };
// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth() ;
export const db = firebase.firestore() ;

const provider = new firebase.auth.GoogleAuthProvider() ;
provider.setCustomParameters({prompt : 'select_account'}) ;
export const signInWithGoogle = ()=>{
  auth.signInWithPopup(provider).then(result=>{
    var email = result.user.email;
    db.collection("userDB").doc(email).set({
      displayName: result.user.displayName,
      email: email,
    })
  }) ;

  }

export default firebase ;

  
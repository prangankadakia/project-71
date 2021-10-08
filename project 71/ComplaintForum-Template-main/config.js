import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
 //Add configuration here
 // Import the functions you need from the SDKs you need


  apiKey: "AIzaSyBociW7lJtBwFs_lReoojsAY6BgGGA3n0E",
  authDomain: "project-71-8abfb.firebaseapp.com",
  projectId: "project-71-8abfb",
  storageBucket: "project-71-8abfb.appspot.com",
  messagingSenderId: "522822995744",
  appId: "1:522822995744:web:386fe9cd3e513bff161145"
};

// Initialize Firebase

 
if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.firestore()


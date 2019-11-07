import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANR3Pdjnv6OpuJ8QLfx1R-oBnv6jDy-Mw",
    authDomain: "crwn-database-89c0f.firebaseapp.com",
    databaseURL: "https://crwn-database-89c0f.firebaseio.com",
    projectId: "crwn-database-89c0f",
    storageBucket: "crwn-database-89c0f.appspot.com",
    messagingSenderId: "635808965355",
    appId: "1:635808965355:web:2ec2956b77f6a82da494ae",
    measurementId: "G-1MCKLSJ2V0"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({  promt: 'select_account'  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
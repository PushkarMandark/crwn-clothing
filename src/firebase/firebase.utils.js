import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAHdKRNCFcEMsiKJQQT18s1UUTlcXDjU4w",
  authDomain: "crwn-db-a41ce.firebaseapp.com",
  databaseURL: "https://crwn-db-a41ce.firebaseio.com",
  projectId: "crwn-db-a41ce",
  storageBucket: "crwn-db-a41ce.appspot.com",
  messagingSenderId: "592478264734",
  appId: "1:592478264734:web:923d8b05bc3d7e3750ca8f",
  measurementId: "G-C8SG6EKR1N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBzdBvTIHZwC7240QhM8BhRqHdPhVlIS90",
    authDomain: "e-commerce-4a276.firebaseapp.com",
    projectId: "e-commerce-4a276",
    storageBucket: "e-commerce-4a276.appspot.com",
    messagingSenderId: "3134190927",
    appId: "1:3134190927:web:f5e627675b7978f87cc13a",
    measurementId: "G-VQXQ3GGCX3"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import * as firebase from 'firebase';
import "firebase/auth";
import Navigation from '../navigation/Navigation';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBQXH0X7MXwcAHkY_GBXLvzMwPRTFNl4cQ",
    authDomain: "pneuma-4ingenio.firebaseapp.com",
    databaseURL: "https://pneuma-4ingenio.firebaseio.com",
    projectId: "pneuma-4ingenio",
    storageBucket: "pneuma-4ingenio.appspot.com",
    messagingSenderId: "639755791106",
    appId: "1:639755791106:web:1bbe8c3380ceb63629b01b",
    measurementId: "G-GHQ3DT2FHV"
};

firebase.initializeApp(firebaseConfig);

// Listen for authentication state to change.
const onAuthStateChanged = (userObserver) => {
    return firebase.auth().onAuthStateChanged(userObserver);
}

const signInWithEmail = (email, password) => {
    console.log('[FBASE-SERV] Signing in with email...');
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

//TODO
const logInUser = (user) => {
    return new Promise((resolve, reject) => {
        // Check if user laready has a profile

        // If no user was logged into our DB

    })
}

const signUpWithEmail = (email, password) => {
    console.log('[FBASE-SERV] Creating accoutn with email ...');
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

const signOut = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
            .then(() => {
                Navigation.reset({ route: 'Login' });
                Navigation.navigate('Login')
                resolve()
            })
            .catch(error => reject(error))
    })
}

export {
    onAuthStateChanged,
    signInWithEmail,
    signUpWithEmail,
    signOut,
}
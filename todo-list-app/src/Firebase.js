import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSxBRRzTNYiRVE4DH8CKpM_GoC9aJPFRbIYc",
    authDomain: "react-auth-c11ad.firebaseapp.com",
    databaseURL: "https://react-auth-c11ad.firebaseio.com",
    projectId: "react-auth-c11ad",
    storageBucket: "",
    messagingSenderId: "154377854568"
};
export const firebaseApp = firebase.initializeApp(config);
export const users = firebaseApp.database().ref().child('users');
export const usersWishlist = firebaseApp.database().ref().child('usersWishlist');
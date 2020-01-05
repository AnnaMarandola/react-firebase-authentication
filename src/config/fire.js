import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDAjuTmUlIJUGP8U87GTmEXqWybhfqrhOI",
  authDomain: "react-firebase-auth-101a6.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-101a6.firebaseio.com",
  projectId: "react-firebase-auth-101a6",
  storageBucket: "react-firebase-auth-101a6.appspot.com",
  messagingSenderId: "414348348252",
  appId: "1:414348348252:web:5e86a38c8e84243a6f8f99"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
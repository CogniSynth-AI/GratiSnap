// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDUlytbK9GH3uvoXqCWstwWbgo4OPxDmPo",

  authDomain: "gratisnap.firebaseapp.com",

  projectId: "gratisnap",

  storageBucket: "gratisnap.appspot.com",

  messagingSenderId: "999571422888",

  appId: "1:999571422888:web:3690dd831032fb1f534c9d",

  measurementId: "G-028CEEEX6T"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};

export function signup (email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login (email, password){
  return signInWithEmailAndPassword(auth, email, password);
}


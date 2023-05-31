// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
let app;
if (firebase.getApps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}

const auth = firebase.auth();
const analytics = getAnalytics(app);

export { auth };
export { analytics };
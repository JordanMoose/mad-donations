import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyAgU54RGz9ZXvbMIVnDpgtH1MBYVm7zdcM",
  authDomain: "mad-donations.firebaseapp.com",
  databaseURL: "https://mad-donations.firebaseio.com",
  projectId: "mad-donations",
  storageBucket: "mad-donations.appspot.com",
  messagingSenderId: "588260641573",
  appId: "1:588260641573:web:86edf91a15a5328000a8cc",
  measurementId: "G-R69T992PH8"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics()

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/home',
  // Privacy policy url.
  privacyPolicyUrl: '/home'
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

export default firebase;
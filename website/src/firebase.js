import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import * as firebaseui from 'firebaseui';

// initialize firebase
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
firebase.analytics();

// initliaze firebaseUI
export const auth = firebase.auth();
var ui = new firebaseui.auth.AuthUI(auth);
var signInRedirect, created, lastSignIn;
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
  signInSuccessUrl: '/login/after',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/home',
  // Privacy policy url.
  privacyPolicyUrl: '/home',
  autoUpgradeAnonymousUsers: true
};
ui.start('#firebaseui-auth-container', uiConfig);

var initApp = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      user.getIdToken().then(function(accessToken) {
      //   document.getElementById('sign-in-status').textContent = 'Signed in';
      //   document.getElementById('sign-in').textContent = 'Sign out';
      //   document.getElementById('account-details').textContent = JSON.stringify({
      //     displayName: displayName,
      //     email: email,
      //     emailVerified: emailVerified,
      //     phoneNumber: phoneNumber,
      //     photoURL: photoURL,
      //     uid: uid,
      //     accessToken: accessToken,
      //     providerData: providerData
      //   }, null, '  ');
        // try {
        //     document.getElementById('user-display-name').textContent = 'Hello ' + displayName; // Can add displayname to menubar component so its displayed across the site
        // } catch(err) {
        //     console.log(err)
        // }
      });
    } else {
      // User is signed out.
      // document.getElementById('sign-in-status').textContent = 'Signed out';
      // document.getElementById('sign-in').textContent = 'Sign in';
      // document.getElementById('account-details').textContent = 'null';
      document.getElementById('user-display-name').textContent = '';
    }
  }, function(error) {
    console.log(error);
  });
};

window.addEventListener('load', function() {
  initApp();
});

export default firebase;
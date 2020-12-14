var firebaseConfig = {
    apiKey: "AIzaSyD8JGSmIN4SsI7fVfFAzygHrwPJge7SV8c",
    authDomain: "npylgithubio.firebaseapp.com",
    projectId: "npylgithubio",
    storageBucket: "npylgithubio.appspot.com",
    messagingSenderId: "881977352363",
    appId: "1:881977352363:web:c2717e0c633748e73717ee",
    measurementId: "G-7K1J48P53D"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
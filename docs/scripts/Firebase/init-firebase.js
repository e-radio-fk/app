var firebaseConfig = {
    apiKey: "AIzaSyB37xSmEXteSUAyUdkrV4W_hVjyk0dsETY",
    authDomain: "e-radio-fk.firebaseapp.com",
    projectId: "e-radio-fk",
    storageBucket: "e-radio-fk.appspot.com",
    messagingSenderId: "152785870975",
    appId: "1:152785870975:web:3a9ea657cbd248e5e95f4a",
    measurementId: "G-1F2JYGKBEQ"
  };

// Initialize Firebase
var fb = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('First time: ', user);
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    console.log('First time: null');
    sessionStorage.setItem('currentUser', null);
  }
});
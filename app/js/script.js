$(window).on("load", function () {
  AOS.init();
  $(".loader-wrapper").fadeOut("slow");
});

var firebaseConfig = {
  apiKey: "AIzaSyDZgGVIfp3dq-2vI7cW_Onv5cFth3HNqZU",
  authDomain: "profile-e22c1.firebaseapp.com",
  databaseURL: "https://profile-e22c1-default-rtdb.firebaseio.com",
  projectId: "profile-e22c1",
  storageBucket: "profile-e22c1.appspot.com",
  messagingSenderId: "335802871020",
  appId: "1:335802871020:web:e05d98edbe46652fd909c9",
  measurementId: "G-GQ6ZHHQGMT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var perf = firebase.performance();
firebase.analytics();
var db = firebase.firestore();

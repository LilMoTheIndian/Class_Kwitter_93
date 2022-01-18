var firebaseConfig = {
  apiKey: "AIzaSyBYsV5dUcXHjRPApW-99RtHy3PTuOYx2tU",
  authDomain: "kwitter-80bf8.firebaseapp.com",
  projectId: "kwitter-80bf8",
  storageBucket: "kwitter-80bf8.appspot.com",
  messagingSenderId: "1020274056039",
  appId: "1:1020274056039:web:a7bf1923882583b9fdedc2",
  measurementId: "G-B6GBF9ZV0V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCMG_MH-v4ft7vJwG6vMdlNhhwDfFtSGPo",
    authDomain: "stupid-project-cfd40.firebaseapp.com",
    databaseURL: "https://stupid-project-cfd40-default-rtdb.firebaseio.com",
    projectId: "stupid-project-cfd40",
    storageBucket: "stupid-project-cfd40.appspot.com",
    messagingSenderId: "973295994901",
    appId: "1:973295994901:web:b734f8d8d54602a5aea61c",
    measurementId: "G-P89B4V90ZC"
};
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 firebase.initializeApp(firebaseConfig);
 function adduser() {
      user_name = document.getElementById("username").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
      //End code
      
getData();

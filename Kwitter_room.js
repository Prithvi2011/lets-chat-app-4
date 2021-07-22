var firebaseConfig = {
    apiKey: "AIzaSyAFXMsnaA8cTP42VGiLJjSOBiJwRt3QP5Y",
    authDomain: "lets-chat-web-app-36fec.firebaseapp.com",
    projectId: "lets-chat-web-app-36fec",
    storageBucket: "lets-chat-web-app-36fec.appspot.com",
    messagingSenderId: "1049816419403",
    appId: "1:1049816419403:web:98fb0972bcb5f78e1951ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"; 
  }
  var username=localStorage.getItem("user_name");
  document.getElementById("welcome_user").innerHTML="welcome"+username+"!";
  function addroom()
  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names=childKey;
    console.log("room_name-"+Room_names)
    row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("ouput").innerHTML+=row;
  });});}
  getData();
  function RedirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"  
  }
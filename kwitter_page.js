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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
  }
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }



  function getData(){ firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML=""; snapshot.forEach(function(childSnaphot){ childkey =childSnaphot.key; childData = childSnaphot.val(); if(childkey !="purpsoe"){
firebase_message_id = childkey;
message_data = childData;
//Start code

//End code
  }});});}
  getData();
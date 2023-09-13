var firebaseConfig = {
    apiKey: "AIzaSyC1f9CfUxmfESf50Xlc5_q9rQRMY0OaCJM",
    authDomain: "let-s-chat-4a982.firebaseapp.com",
    databaseURL: "https://let-s-chat-4a982-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-4a982",
    storageBucket: "let-s-chat-4a982.appspot.com",
    messagingSenderId: "13372209456",
    appId: "1:13372209456:web:fb9f16f059e2ae11ee30f5",
    measurementId: "G-XJWZTH7Z2T"
  };

firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update(
      {purpose : "adding room name"});
      
      localStorage.setItem("room_name", room_name);

      window.location = "chat_room.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
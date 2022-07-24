var firebaseConfig = {
    apiKey: "AIzaSyDAM6PKxDfY3bwkSY0-_snMABSYw8fsXsY",
    authDomain: "letschatwebapp-58953.firebaseapp.com",
    databaseURL: "https://letschatwebapp-58953-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "letschatwebapp-58953",
    storageBucket: "letschatwebapp-58953.appspot.com",
    messagingSenderId: "809173009407",
    appId: "1:809173009407:web:24d3a05abb009e1d51ddca",
    measurementId: "G-K3L9J9L91L"
  };
  
  // Initialize Firebase
var app = initializeApp(firebaseConfig);

function addRoom(){
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).push({
      name:user_name,
      message:msg,
      like:0
   });
      localStorage.setItem("room_name", room_name);

      window.location = "index.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
 window.location = "index.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "kwitter_room.html";
}


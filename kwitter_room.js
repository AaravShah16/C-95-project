var firebaseConfig = {
    apiKey: "AIzaSyAMZs0arLuJSYMYA7GPOyCMe21mqasZtVI",
    databaseUrl: "https://kwitter-project-30095-default-rtdb.firebaseio.com/",
    authDomain: "kwitter-project-30095.firebaseapp.com",
    projectId: "kwitter-project-30095",
    storageBucket: "kwitter-project-30095.appspot.com",
    messagingSenderId: "591789749827",
    appId: "1:591789749827:web:4eccf55294f93a2ba506f6",
    measurementId: "G-WX9GKR5E40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
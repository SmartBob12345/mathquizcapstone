var firebaseConfig = {
    apiKey: "AIzaSyDiJaGybTwWIg078-7PXSk6vZXUo585HE4",
    authDomain: "mathquiz-7273b.firebaseapp.com",
    databaseURL: "https://mathquiz-7273b-default-rtdb.firebaseio.com",
    projectId: "mathquiz-7273b",
    storageBucket: "mathquiz-7273b.appspot.com",
    messagingSenderId: "40987154769",
    appId: "1:40987154769:web:221e520e48708d48ae9b70"
};

firebase.initializeApp(firebaseConfig);

var subtnum, addnum, multnum, divnum;
username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = username;

function getData() {
    firebase.database().ref(username).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            firebase_highscore_id = childKey;
            highscore_data = childData;
            console.log(firebase_highscore_id);
            console.log(highscore_data);
            addnum = highscore_data['addition'];
            subtnum = highscore_data['subtraction'];
            multnum = highscore_data['multiplication'];
            divnum = highscore_data['division'];
        });
    });
}
getData();

function plus() {
    console.log("plus");
    localStorage.setItem("gamemode", "Addition!");
    localStorage.setItem("sign", "+");
    if(addnum > 0){
        firebase.database().ref(username).child("highscore").update({
            addition: addnum
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
    else{
        firebase.database().ref(username).child("highscore").update({
            addition: 0
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
    
}
function subtract() {
    console.log("subtract");
    localStorage.setItem("gamemode", "Subtraction!");
    localStorage.setItem("sign", "-");
    if(subtnum > 0){
        firebase.database().ref(username).child("highscore").update({
            subtraction: subtnum
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
    else{
        firebase.database().ref(username).child("highscore").update({
            subtraction: 0
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
}
function multiply() {
    console.log("multiply");
    localStorage.setItem("gamemode", "Multiplication!");
    localStorage.setItem("sign", "x");
    if(multnum > 0){
        firebase.database().ref(username).child("highscore").update({
            multiplication: multnum
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
    else{
        firebase.database().ref(username).child("highscore").update({
            multiplication: 0
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
}
function divide() {
    console.log("divide");
    localStorage.setItem("gamemode", "Division!");
    localStorage.setItem("sign", "/");
    if(divnum > 0){
        firebase.database().ref(username).child("highscore").update({
            division: divnum
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
    else{
        firebase.database().ref(username).child("highscore").update({
            division: 0
        }).then(function(){
            window.location = "practice.html";
        }).catch(function(error){
            console.log("Error storing data in firebase", error);
        });
    }
}
    
    





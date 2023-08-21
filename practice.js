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

var subths, addhs, mulths, divhs;
username = localStorage.getItem("username");
document.getElementById("plusbear").style.visibility = "hidden";

function getData() {
    firebase.database().ref(username).on('value', function (snapshot) {
        document.getElementById("highscore").innerHTML = " ";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            firebase_highscore_id = childKey;
            highscore_data = childData;
            console.log(firebase_highscore_id);
            console.log(highscore_data);
            addnum = highscore_data['addition'];
            console.log(addnum);
            subtnum = highscore_data['subtraction'];
            console.log(subtnum);
            multnum = highscore_data['multiplication'];
            console.log(multnum);
            divnum = highscore_data['division'];
            console.log(divnum);
            if (operation == "Addition!") {
                document.getElementById("highscore").innerHTML = addnum;
            }
            if (operation == "Subtraction!") {
                document.getElementById("highscore").innerHTML = subtnum;
            }
            if (operation == "Multiplication!") {
                document.getElementById("highscore").innerHTML = multnum;
            }
            if (operation == "Division!") {
                document.getElementById("highscore").innerHTML = divnum;
            }
            subths = subtnum;
            addhs = addnum;
            mulths = multnum;
            divhs = divnum;
            console.log("Subt", subths);
            console.log("Add", addhs);
            console.log("Mult", mulths);
            console.log("Div", divhs);
        });
    });
}
getData();




function start() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    console.log(num1, num2)
}
function back() {
    localStorage.removeItem("gamemode");
    localStorage.removeItem("sign");
    window.location = "choose.html";
}
start();
sign = localStorage.getItem("sign");
operation = localStorage.getItem("gamemode");
if (operation == "Division!") {
    if (num2 > num1) {
        start();
    }
}
score = 0;
console.log(sign, operation);
function everything() {
    document.getElementById("practice_welcome").innerHTML = "Practice " + operation;
    document.getElementById("question").innerHTML = num1 + " " + sign + " " + num2;
    if (operation == "Multiplication!") {
        answer = num1 * num2;
        document.getElementById("highscore").innerHTML = mulths;
    }
    else if (operation == "Addition!") {
        answer = num1 + num2
        document.getElementById("highscore").innerHTML = addhs;
    }
    else if (operation == "Subtraction!") {
        answer = num1 - num2;
        document.getElementById("highscore").innerHTML = subths;
    }
    else if (operation == "Division!") {
        answer = num1 / num2
        answer = Math.round(answer);
        document.getElementById("highscore").innerHTML = divhs;
    }
    console.log(answer);
}
everything();

function check() {
    input = document.getElementById("answer").value;
    if (input == answer) {
        score = score + 1;

        if (operation == "Multiplication!") {
            if (score > mulths) {
                mulths = score;
            }
        }
        if (operation == "Division!") {
            if (score > divhs) {
                divhs = score;
            }
        }
        if (operation == "Subtraction!") {
            if (score > subths) {
                subths = score;
            }
        }
        if (operation == "Addition!") {
            if (score > addhs) {
                addhs = score;
            }
        }
        document.getElementById("score").innerHTML = "Score:" + score;
        document.getElementById("answer").innerHTML = "";
        start();
        everything();
        highscore();
        document.getElementById("plusbear").src = "plus bearbeary.gif";
        setTimeout(function () {
            document.getElementById("plusbear").style.visibility = "visible";
        }, 500);
        document.getElementById("plusbear").style.visibility = "hidden";
    }
    else {
        document.getElementById("answer").innerHTML = "";
        document.getElementById("plusbear").src = "3tfo.gif";
        setTimeout(function () {
            document.getElementById("plusbear").style.visibility = "visible";
        }, 500);
        document.getElementById("plusbear").style.visibility = "hidden";
    }
}



function highscore() {
    if (operation == "Addition!") {
        firebase.database().ref(username).child("highscore").update({
            addition: addhs
        });
    }
    if (operation == "Subtraction!") {
        firebase.database().ref(username).child("highscore").update({
            subtraction: subths
        });
    } if (operation == "Multiplication!") {
        firebase.database().ref(username).child("highscore").update({
            multiplication: mulths
        });
    } if (operation == "Division!") {
        firebase.database().ref(username).child("highscore").update({
            division: divhs
        });
    }
}





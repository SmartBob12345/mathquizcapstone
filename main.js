function choosepage() {
    username = document.getElementById("username_input").value;
    localStorage.setItem("username", username);
    window.location = "choose.html";
}
const login = document.getElementById("login");
let logged = false;

login.addEventListener("click", function (){
    if (!logged){
        alert("Bienvenue");
        login.innerText = "Logout";
        logged = true;
    }else {
        alert("Vous êtes déconnecté");
        login.innerText = "Sign-in";
        logged = false;
    }
})
window.addEventListener("DOMContentLoaded",load);
function load(){
    console.log("JS VIRKER!");
}

// Json Javascript object notation --> Et array med objekter i.
let loginData = [
    {"brugernavn":"abc12345","kodeord":"kodeord1"},
    {"brugernavn":"def6789","kodeord":"kodeord2"}
];

// Eventlistener som reagerer på at man klikker på "login" knappen.
document.querySelector("#login-button").addEventListener("click", (e) => {
    e.preventDefault();

// Variabler for at ungå at skrive det i funktionen.
    const usernameInput = document.querySelector("#username-input").value;
    const passwordInput = document.querySelector("#password-input").value;

    let login = false;

    for(let i = 0; i < loginData.length; i++){        
        if (loginData[i].brugernavn == usernameInput && loginData[i].kodeord == passwordInput){
            login = true;
            window.location = "index.html";
            break; // Stopper funktionen hvis if-statement er true
        } else {
            document.querySelector("#invalid-input").innerHTML = "Brugernavn eller kodeord er forkert"; // Targeter en paragraf med invalid-input id, og replacer det med teksten.
        }
    }
});